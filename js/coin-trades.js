(() => {
    const orbit = document.querySelector(".coin-orbit");
    if (!orbit || orbit.dataset.exchangeInitialized) return;

    const monero = orbit.querySelector(".coin-xmr");
    const coins = ["btc", "usd", "eth", "brl", "gbp", "eur"]
        .map(name => orbit.querySelector(`.coin-${name}`))
        .filter(Boolean);

    if (!monero || !coins.length) return;

    orbit.dataset.exchangeInitialized = "true";

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    let activeAnimations = [];
    let timer;
    let previousCoin = null;

    function wait(ms) {
        return new Promise(resolve => {
            timer = setTimeout(resolve, ms);
        });
    }

    function pickCoin() {
        const choices = coins.filter(coin => coin !== previousCoin);
        const pool = choices.length ? choices : coins;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function getCenter(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height
        };
    }

    async function exchange(coin) {
        const a = getCenter(monero);
        const b = getCenter(coin);

        // Move both coins toward a shared meeting point.
        const dx = b.x - a.x;
        const dy = b.y - a.y;

        const overlap = Math.min(a.width, b.width) * 0.32;
        const distance = Math.hypot(dx, dy);

        if (distance < 1) return;

        const ux = dx / distance;
        const uy = dy / distance;

        const travel = Math.max(0, distance - overlap * 2);

        const mx = ux * travel * 0.30;
        const my = uy * travel * 0.30;
        const cx = -ux * travel * 0.70;
        const cy = -uy * travel * 0.70;

        monero.style.zIndex = "20";
        coin.style.zIndex = "10";

        const options = {
            duration: 1500,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards"
        };

        activeAnimations = [
            monero.animate([
                { translate: "0px 0px" },
                { translate: `${mx}px ${my}px`, offset: 1 }
            ], options),
            coin.animate([
                { translate: "0px 0px" },
                { translate: `${cx}px ${cy}px`, offset: 1 }
            ], options)
        ];

        await Promise.all(activeAnimations.map(animation => animation.finished));

        if (reducedMotion.matches) {
            activeAnimations.forEach(animation => animation.cancel());
            monero.style.zIndex = "";
            coin.style.zIndex = "";
            return;
        }

        // Brief, gentle pause while Monero partially covers the other coin.
        //await wait(50);

        activeAnimations = [
            monero.animate([
                { translate: `${mx}px ${my}px` },
                { translate: "0px 0px" }
            ], {
                duration: 1700,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards"
            }),
            coin.animate([
                { translate: `${cx}px ${cy}px` },
                { translate: "0px 0px" }
            ], {
                duration: 1700,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards"
            })
        ];

        await Promise.all(activeAnimations.map(animation => animation.finished));

        // Remove the temporary animations so the original positions return.
        activeAnimations.forEach(animation => animation.cancel());
        activeAnimations = [];

        monero.style.zIndex = "";
        coin.style.zIndex = "";
    }

    async function run() {
        while (orbit.isConnected) {
            if (reducedMotion.matches) {
                await wait(1000);
                continue;
            }

            const coin = pickCoin();
            previousCoin = coin;

            await exchange(coin);
            await wait(Math.random() * 300);
        }
    }

    reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) {
            activeAnimations.forEach(animation => animation.cancel());
            activeAnimations = [];
            monero.style.zIndex = "";
            coins.forEach(coin => {
                coin.style.zIndex = "";
            });
        }
    });

    run();
})();

(() => {
  function initCoinExchanges() {
    const orbit = document.querySelector('.coin-orbit');
    if (!orbit || orbit.dataset.exchangeAnimation === 'running') return;

    const monero = orbit.querySelector('.coin-xmr');
    const partners = [...orbit.querySelectorAll('.coin:not(.coin-xmr)')];

    if (!monero || partners.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    orbit.dataset.exchangeAnimation = 'running';

    const wait = ms => new Promise(resolve => window.setTimeout(resolve, ms));

    const shuffle = items => {
      const result = [...items];

      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }

      return result;
    };

    function pulseCoin(coin) {
      coin.classList.remove('coin-exchange-pulse');
      void coin.offsetWidth;
      coin.classList.add('coin-exchange-pulse');
    }
    
    let bag = shuffle(partners);
    let previousPartner = null;

    async function runExchange(partner) {
      // Measure rendered positions so movement adapts to the viewport.
      const centerOf = element => {
        const rect = element.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        };
      };

      const m = centerOf(monero);
      const c = centerOf(partner);

      const dx = c.x - m.x;
      const dy = c.y - m.y;
      const distance = Math.hypot(dx, dy);

      if (!distance) return;

      // Bring the coins into a slight overlap.
      const targetDistance = (m.width + c.width) * 0.34;
      const closure = Math.max(0, distance - targetDistance);

      const ux = dx / distance;
      const uy = dy / distance;

      const moneroX = ux * closure * 0.22;
      const moneroY = uy * closure * 0.22;
      const partnerX = -ux * closure * 0.78;
      const partnerY = -uy * closure * 0.78;

      const transform = (x, y) =>
        `translate(-50%, -50%) translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;

      const frames = (x, y) => [
        {
          offset: 0,
          transform: transform(0, 0),
          easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
        },
        {
          offset: 0.43,
          transform: transform(x, y),
          easing: 'linear'
        },
        {
          offset: 0.56,
          transform: transform(x, y),
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        {
          offset: 1,
          transform: transform(0, 0)
        }
      ];

      const duration = 2000;
      const options = { duration, fill: 'none' };

      const moneroAnimation = monero.animate(
        frames(moneroX, moneroY),
        options
      );

      const partnerAnimation = partner.animate(
        frames(partnerX, partnerY),
        options
      );


      // Randomly simulate the direction of the exchange.
      const moneroSends = Math.random() < 0.5;
      const source = moneroSends ? monero : partner;
      const destination = moneroSends ? partner : monero;

      // Set the stacking order once for the entire exchange.
      source.classList.add('coin-exchange-foreground');
      destination.classList.remove('coin-exchange-foreground');

      await wait(850);
      pulseCoin(source);

      await wait(150);
      pulseCoin(destination);

      await Promise.all([
        moneroAnimation.finished.catch(() => {}),
        partnerAnimation.finished.catch(() => {})
      ]);

      // Restore the default stacking order after the exchange.
      source.classList.remove('coin-exchange-foreground');
    }

    async function loop() {
      while (orbit.isConnected) {
        if (document.hidden) {
          await wait(500);
          continue;
        }

        if (bag.length === 0) {
          bag = shuffle(partners);

          // Avoid repeating the previous coin when possible.
          if (bag.length > 1 && bag[0] === previousPartner) {
            [bag[0], bag[1]] = [bag[1], bag[0]];
          }
        }

        const partner = bag.shift();
        previousPartner = partner;

        await runExchange(partner);
        await wait(200 + Math.random() * 300);
      }
    }

    // Wait for coin images to load before measuring positions.
    Promise.all(
      partners.concat(monero).map(coin => {
        if (coin.complete || !('decode' in coin)) {
          return Promise.resolve();
        }

        return coin.decode().catch(() => {});
      })
    ).then(() => {
      requestAnimationFrame(() => requestAnimationFrame(loop));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initCoinExchanges,
      { once: true }
    );
  } else {
    initCoinExchanges();
  }
})();

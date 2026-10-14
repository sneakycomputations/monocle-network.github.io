(() => {
  const root = document.documentElement;
  const savedTheme = (() => { try { return localStorage.getItem('monocle-theme'); } catch { return null; } })();
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  async function include(selector, url) {
    const target = document.querySelector(selector);
    if (!target) return;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      target.innerHTML = await response.text();
      target.dispatchEvent(new CustomEvent('partial:loaded', { bubbles: true }));
    } catch (error) {
      console.error(`Could not load ${url}:`, error);
      target.setAttribute('data-include-error', 'true');
    }
  }

  function wireControls() {
    const menu = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.primary-navigation');
    if (menu && nav) menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });

    const themeButton = document.querySelector('.theme-toggle');
    if (themeButton) themeButton.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.setItem('monocle-theme', next); } catch { /* Theme still works for this page. */ }
    });

    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.primary-navigation a, .footer-column a').forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
    });
  }

  Promise.all([
    include('#site-header', 'partials/header.html'),
    include('#site-footer', 'partials/footer.html'),
    include('#banner-get-involved', 'partials/get-involved.html'),
    include('#banner-download', 'partials/download.html'),
    include('#banner-reserves', 'partials/community-reserves.html'),
    include('#banner-bootstrapped', 'partials/bootstrapped-network.html'),
    include('#banner-wiki', 'partials/wiki.html'),
    include('#banner-transparency', 'partials/transparency.html')
  ]).then(wireControls);
})();

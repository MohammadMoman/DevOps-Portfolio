window.createNavbar = function createNavbar() {
  const pathname = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (target) => pathname === target;

  return `
    <nav class="site-nav" aria-label="Primary navigation">
      <a class="brand-link" href="./index.html">Moman</a>
      <ul class="nav-links">
        <li><a class="${isActive('index.html') ? 'nav-active' : ''}" href="./index.html#home">Home</a></li>
        <li><a class="${isActive('aboutme.html') ? 'nav-active' : ''}" href="./aboutme.html">About</a></li>
        <li><a class="${isActive('index.html') ? 'nav-active' : ''}" href="./index.html#projects">Projects</a></li>
        <li><a class="${isActive('architecture.html') ? 'nav-active' : ''}" href="./architecture.html">Architecture</a></li>
        <li><a class="${isActive('status.html') ? 'nav-active' : ''}" href="./status.html">Status</a></li>
      </ul>
    </nav>
  `;
};

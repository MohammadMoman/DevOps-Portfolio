window.createSnow = function createSnow() {
  const snowContainer = document.getElementById('snow');

  if (!snowContainer) {
    return;
  }

  const flakeChars = ['*', '+', '.', '•'];

  for (let i = 0; i < 45; i += 1) {
    const flake = document.createElement('span');
    flake.className = 'flake';
    flake.textContent = flakeChars[Math.floor(Math.random() * flakeChars.length)];
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.fontSize = `${7 + Math.random() * 13}px`;
    flake.style.opacity = 0.2 + Math.random() * 0.5;
    flake.style.animationDuration = `${7 + Math.random() * 11}s`;
    flake.style.animationDelay = `${-Math.random() * 14}s`;

    snowContainer.appendChild(flake);
  }
};

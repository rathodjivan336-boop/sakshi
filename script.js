// Sakshi's family birthday website — lightweight, no libraries required.
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.textContent = '☰'; menuToggle.setAttribute('aria-label', 'Open menu'); }
}));

let toastTimer;
function showBirthdayWish() {
  const toast = document.getElementById('wishToast');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
  launchConfetti();
}
document.getElementById('wishButton')?.addEventListener('click', showBirthdayWish);
document.getElementById('finalWishButton')?.addEventListener('click', showBirthdayWish);

function launchConfetti() {
  // A small capped burst avoids slowing phones or laptops.
  const symbols = ['✦', '✧', '♥', '●'];
  const colors = ['#c5a46d', '#bd647c', '#f1b9cb', '#ead9b7', '#fff'];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = `${8 + Math.random() * 10}px`;
    piece.style.animationDuration = `${2.2 + Math.random() * 2.2}s`;
    piece.style.setProperty('--drift', `${-100 + Math.random() * 200}px`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4800);
  }
}

// Helpful message if the optional MP3 hasn't been added yet.
const audio = document.getElementById('birthdayAudio');
audio?.addEventListener('error', () => {
  const hint = document.getElementById('audioHint');
  if (hint) hint.textContent = 'No song file found yet. Add your own MP3 at music/kannada-birthday-song.mp3 and refresh.';
});

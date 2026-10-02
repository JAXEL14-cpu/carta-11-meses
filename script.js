const moments = [
  'El comienzo de nuestra historia.', 'Nuevos momentos juntos.', 'Cada vez más recuerdos.',
  'Aprendiendo más el uno del otro.', 'Más momentos para recordar.', 'Medio año juntos.',
  'Seguimos creciendo juntos.', 'Más experiencias compartidas.', 'Otro mes a tu lado.',
  'Cada vez más cerca.', 'Hoy celebramos nuestra historia. ❤️'
];
const timeline = document.querySelector('#timeline');
moments.forEach((moment, index) => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `<strong>Mes ${index + 1}</strong><span>${moment}</span>`;
  timeline.append(item);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });
document.querySelectorAll('.reveal, .timeline-item').forEach((element) => observer.observe(element));

document.querySelector('#openLetter').addEventListener('click', () => {
  document.querySelector('#carta').scrollIntoView({ behavior: 'smooth' });
});

const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500), { passive: true });

const song = document.querySelector('#ourSong');
const songButton = document.querySelector('#songToggle');
songButton.addEventListener('click', async () => {
  if (song.paused) {
    try {
      await song.play();
      songButton.textContent = 'Pausar canción ⏸';
    } catch {
      songButton.textContent = 'Agrega musica.mp3 🎵';
    }
  } else {
    song.pause();
    songButton.textContent = 'Nuestra canción 🎵';
  }
});
song.addEventListener('ended', () => { songButton.textContent = 'Nuestra canción 🎵'; });

const heartLayer = document.querySelector('.hearts');
function addHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > 0.5 ? '♥' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 15}px`;
  heart.style.animationDuration = `${10 + Math.random() * 8}s`;
  heartLayer.append(heart);
  window.setTimeout(() => heart.remove(), 19000);
}
window.setInterval(addHeart, 1500);

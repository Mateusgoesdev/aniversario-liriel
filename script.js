// Criar corações animados
const container = document.querySelector('.hearts-background');

function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  container.appendChild(heart);
  
  setTimeout(() => heart.remove(), 6000);
}

setInterval(criarCoracao, 300);
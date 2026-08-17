document.getElementById('botao-misterioso').addEventListener('click', () => {
  chuvaDePatinhas();
  tocarMiado();
});

function chuvaDePatinhas() {
  const quantidade = 100;
  const main = document.querySelector('main');

  for (let i = 0; i < quantidade; i++) {
    const patinha = document.createElement('span');
    patinha.textContent = '🐾';
    patinha.classList.add('patinha-caindo');

    patinha.style.left = Math.random() * 100 + '%';
    patinha.style.animationDuration = (2 + Math.random() * 2) + 's';
    patinha.style.fontSize = (24 + Math.random() * 32) + 'px';
    patinha.style.animationDelay = (Math.random() * 0.5) + 's';

    main.appendChild(patinha);

    patinha.addEventListener('animationend', () => patinha.remove());
  }
}

function tocarMiado() {
  const audio = new Audio('sounds/miado.mp3');
  audio.play().catch(() => {
    console.log('Não foi possível tocar o áudio.');
  });
}
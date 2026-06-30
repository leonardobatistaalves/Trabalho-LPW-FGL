document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    // Cada card atrasa 60ms em relação ao anterior
    const delay = index * 0.06;
    card.style.animationDelay = `${delay}s`;
  });
});
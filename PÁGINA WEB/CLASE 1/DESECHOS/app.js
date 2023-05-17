const items = document.querySelectorAll('.item');

items.forEach((item) => {
  const img = item.querySelector('img');
  const details = item.querySelector('.details');

  img.addEventListener('click', () => {
    details.classList.toggle('visible');
  });
});
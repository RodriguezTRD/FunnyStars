const registerLink = document.querySelector('.register-link a');
const message = document.querySelector('.message');
const submitBtn = document.getElementById('submit-btn');

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  submitBtn.innerHTML = 'Regístrate';
  message.innerHTML = 'No dudes más, tengamos grandes aventuras';
});

setInterval(() => {
  submitBtn.classList.add('button-active');
  setTimeout(() => {
    submitBtn.classList.remove('button-active');
  }, 1000);
}, 2000);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.innerHTML = 'Iniciando sesión...';
  setTimeout(() => {
    submitBtn.innerHTML = 'Ingresar';
  }, 2000);
});
const registerLink = document.querySelector('.register-link a');
const message = document.querySelector('.message');
const submitBtn = document.getElementById('submit-btn');

const typed = new Typed('.typed', {
  strings: [
    '<i class="last">grandes aventuras</i>',
    '<i class="last">el viaje planetario</i>',
    '<i class="last">descubrimiento estelares</i>',
    '<i class="last">tus teorias espaciales</i>'
  ],

  typeSpeed: 75, 
  startDelay: 300, 
  backSpeed: 75, 
  smartBackspace: true, 
  shuffle: false, 
  backDelay: 1500, 
  loop: true, 
  loopCount: false, 
  showCursor: true, 
  cursorChar: '|', 
  contentType: 'html', 
});



/* ESTRELLAS */
for(var i = 0; i < 200; i++) {
  var estrella = document.createElement('div');
  estrella.classList.add('estrella');
  estrella.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  estrella.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  document.body.appendChild(estrella);
}

for(var i = 0; i < 200; i++) {
  var estrella2 = document.createElement('div');
  estrella2.classList.add('estrella');
  estrella2.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  estrella2.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  document.body.appendChild(estrella2);
}




/* LOGIN */
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
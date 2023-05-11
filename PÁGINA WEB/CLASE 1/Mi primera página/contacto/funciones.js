const form = document.getElementById('contact-form');
const animacion = document.querySelector('.animacion');

animacion.style.animationPlayState = 'running';

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const name = form.elements['name'].value;
	const email = form.elements['email'].value;
	const message = form.elements['message'].value;
	
	//Aqui puedes agregar la logica para enviar el mensaje a tu correo electronico
	
	alert(`Gracias por contactarnos, ${name}!`)
	
	form.reset();
});






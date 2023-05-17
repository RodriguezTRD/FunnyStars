const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

// Configuración del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables del juego
let rocketX = canvas.width / 2;
let rocketY = canvas.height - 100;
let rocketSpeedX = 5;
let rocketSpeedY = -5;
let rocketWidth = 30;
let rocketHeight = 50;
let score = 0;

// Función para dibujar el cohete
function drawRocket() {
  context.beginPath();
  context.fillRect(rocketX, rocketY, rocketWidth, rocketHeight);
  context.closePath();
}

// Función para mover el cohete
function moveRocket() {
  rocketX += rocketSpeedX;
  rocketY += rocketSpeedY;

  // Detectar colisión con los bordes del canvas
  if (rocketX < 0 || rocketX + rocketWidth > canvas.width) {
    rocketSpeedX = -rocketSpeedX;
  }

  if (rocketY < 0) {
    rocketSpeedY = -rocketSpeedY;
  }

  if (rocketY + rocketHeight > canvas.height) {
    gameOver();
  }

  // Detectar colisión con el mouse
  canvas.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (mouseX > rocketX && mouseX < rocketX + rocketWidth
        && mouseY > rocketY && mouseY < rocketY + rocketHeight) {
      score += 10;
      scoreElement.innerHTML = 'Score: ' + score;
    }
  });
}

// Función para dibujar el fondo estrellado
function drawBackground() {
  const stars = [];
  for (let i = 0; i < canvas.width; i++) {
    const starX = Math.random() * canvas.width;
    const starY = Math.random() * canvas.height;
    const starSize = Math.random() * 3;
    const starBrightness = Math.random();

    stars.push({ x: starX, y: starY, size: starSize, brightness: starBrightness });
  }

  stars.forEach(star => {
    context.beginPath();
    context.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  });
}

// Función para detener el juego cuando se pierde
function gameOver() {
  clearInterval(intervalId);
  alert(`¡Perdiste! Tu puntaje final es: ${score}`);
  location.reload();
}

// Función para borrar el canvas y dibujar todo
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawRocket();
  moveRocket();
}

// Llamar a la función draw cada 10 milisegundos
const intervalId = setInterval(draw, 10);
const titleBar = document.querySelector('.title-bar');
const title = document.querySelector('.title');
const controls = document.querySelector('.controls');
const btns = document.querySelectorAll('.btn');

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


let isMaximized = false;

titleBar.addEventListener('click', () => {
  if (!isMaximized) {
    title.style.display = 'none';
    controls.style.display = 'none';
    titleBar.style.width = '100%';
    titleBar.style.height = '100%';
    titleBar.style.top = '0';
    titleBar.style.right = '0';
    isMaximized = true;
  } else {
    title.style.display = 'initial';
    controls.style.display = 'flex';
    titleBar.style.width = '50%';
    titleBar.style.height = '30px';
    titleBar.style.top = '0';
    titleBar.style.right = '0';
    isMaximized = false;
  }
});

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('minimize')) {
      window.minimize();
    } else if (btn.classList.contains('maximize')) {
      window.maximize();
    } else if (btn.classList.contains('close')) {
      window.close();
    }
  });
});


function initMap() {
  const uluru = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap; 




function initMap() {
  // Coordenadas del mapa
  var myLatLng = {lat: 37.7749, lng: -122.4194};

  // Crea nueva instancia del mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng
  });

  // Agrega nuevo marcador
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'San Francisco, CA'
  });
}



// Funciones para mostrar/ocultar los divs de los cuadros
function mostrar(nombre) {
	document.getElementById(nombre).style.display = "block";
}

function ocultar(nombre) {
	document.getElementById(nombre).style.display = "none";
}

// función para activar el menú fijo al desplazarse hacia abajo
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > window.innerHeight) {
      menu.classList.add('fixed-menu');
    } else {
      menu.classList.remove('fixed-menu');
    }
  });
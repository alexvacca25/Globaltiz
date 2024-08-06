
const urlWhatsapp = 'https://api.whatsapp.com/send/?phone=17869330019&text&type=phone_number&app_absent=0';
const urlFacebook = 'https://www.facebook.com/globaltiz';
const urlInstagram = 'https://www.instagram.com/globaltiz/';


const paginas = `
<ul class="nav justify-content-end">
    <li class="nav-item" >
        <a class="nav-link txt-que-hacemos" href="#que-hacemos">¿Que hacemos?</a> 
    </li>
    <li class="nav-item">
        <a class="nav-link txt-clientes" href="#clientes">Clientes</a>
    </li>
    <li class="nav-item">
        <a class="nav-link txt-contactanos" href="#contactanos">Contactanos</a>
    </li>
</ul>
`;

const redes = `
    <a href="${urlWhatsapp}" target="_blank"><i class="bi bi-whatsapp"></i></a>
    <a href="${urlFacebook}" target="_blank"><i class="bi bi-facebook"></i></a>
    <a href="${urlInstagram}" target="_blank"><i class="bi bi-instagram"></i></a>
`;

window.addEventListener("scroll", function () {

    document.querySelector('nav').style.background = window.pageYOffset >= 50 ? '#0577BE' : 'transparent';
})

/**
 * cargar el menu
 */
const offcanvasbody = document.querySelector('.offcanvas-body');
const menu = document.getElementById('menu');
offcanvasbody.innerHTML = paginas + '<div class="reds">' + redes + '</div>';
menu.innerHTML = paginas;


/**
 * cargar redes
 */
const redesVista = document.querySelector('.redes');
redesVista.innerHTML = redes;


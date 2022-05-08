
//Declarando Variáveis
var btnContact = document.querySelector('.lj-btn-contact');
var toggleModal = document.querySelectorAll('.lj-toggle-modal')

//Functions
var preloaderFunct = function () {
    var pagePreloader = document.querySelector('.lj-preloader');
    pagePreloader.classList.add('lj-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);
}

var contactChanger =  function () {
    var boxContact = document.querySelector('.lj-contact-info');
    boxContact.classList.toggle('lj-is-open');
    this.classList.toggle('lj-change-icon');
}

var modalChanger = function () {
    var overlay = document.querySelector('.lj-overlay');
    var modalOrcamento = document.querySelector('#lj-modal-orcamento');

    overlay.classList.toggle('lj-is-open');
    modalOrcamento.classList.toggle('lj-is-open');
    modalOrcamento.classList.toggle('lj-slide-top-in');
}

//Events

//Page preloader
window.addEventListener('load', function () {
    preloaderFunct();
});

//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    contactChanger();
});

//Abrindo e fechando o modal de orçamento
for(var i = 0; i < toggleModal.length; i++)
{
    toggleModal[i].addEventListener('click', function () {
        modalChanger();
    });
}

/* //Animando elementos on scroll com waypoints

var waypoint = new Waypoint({
    element: document.querySelector('.lj-scroll-down'),
    handler: function() {
        console.log('disparou');
    }
}); */


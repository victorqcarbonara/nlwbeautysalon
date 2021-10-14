// ABRE E FECHA O MENU AO CLICAR NO ÍCONE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDE TODO O MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// ALTERAR O HEADER DA PÁGINA AO UTILIZAR O SCROLL, ADICIONANDO UM SOMBREADO
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // Maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Menor que a altura do header
    header.classList.remove('scroll')
  }
}

// BOTÃO BACK TO TOP
const backToTopButton = document.querySelector('.back-to-top')
function backToTheTopButton() {
  if (window.scrollY >= 200) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1200: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLL REVEAL - MOSTRAR ELEMENTOS CONFORME O SCROLL DESCER PELA PÁGINA
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social`,
  { interval: 100 }
)

// MENU ATIVO CONFORME SEÇÃO VISÍVEL NA PÁGINA
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

// EVENTOS DE SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTheTopButton()
  activateMenuAtCurrentSection()
})

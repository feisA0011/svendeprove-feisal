const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navContainer = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li')

    burger.addEventListener('click', () => {
        if (navContainer) {
            navContainer.classList.toggle('nav-active')
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .7}s`
                }
            })
        }

        burger.classList.toggle('toggle')
    })
}
navSlide()
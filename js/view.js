/**
 * Navbar active
 */

for ( let i = 0; i < navElemArr.length; i++) {
    
    navElemArr[i].addEventListener('click', function() {

        navBar.classList.toggle('active')
        overlay.classList.toggle('active')
        document.body.classList.toggle('active')

    })
}


/**
 * Header sticky
 */

window.addEventListener('scroll', function() {
    window.scrollY >= 10 ? header.classList.add('active') : header.classList.remove('active')
})

/**
 * Play movie btn
 */

openVideoBtn.addEventListener('click', function() {
    modalVideo.classList.add('open')
})

/**
 * Close movie
 */

closeVideoBtn.addEventListener('click', function() {
    modalVideo.classList.remove('open')
})

/**
 * Go top button
 */

window.addEventListener('scroll', function() {
    window.scrollY >= 500 ? goTopBtn.classList.add('active') : goTopBtn.classList.remove('active')
})
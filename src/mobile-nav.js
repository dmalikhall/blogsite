const mobileNav = document.getElementById('mobile_nav')
const closeMobileNav = document.getElementById('close_menu-btn')
const openMobileNav = document.getElementById('open_menu-btn')

openMobileNav.addEventListener('click', function() {
    mobileNav.classList.toggle('open_mobile-nav')
})

closeMobileNav.addEventListener('click', function(){
    mobileNav.classList.remove('open_mobile-nav')
})


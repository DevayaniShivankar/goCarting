const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    } 
}

showMenu('nav-toggle','nav__menu')

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active link
    navlink.forEach(n => n.classList.remove('active'))
    this.clas.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click', linkAction))
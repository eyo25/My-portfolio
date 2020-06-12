const MenuBtn=document.querySelector('.menu-btn');
const Menu=document.querySelector('.menu');
const MenuNav=document.querySelector('.menu-nav');
const MenuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelectorAll('nav-Items');
let showMenu=false;
MenuBtn.addEventListener('click',togglemenu);
function togglemenu() {
    if(!showMenu){
MenuBtn.classList.add('close');
Menu.classList.add('show');
MenuNav.classList.add('show');
MenuBranding.classList.add('show');
navItems.forEach(item=>item.classList.add('show'));
showMenu=true;
    }else{
        MenuBtn.classList.remove('close');
        Menu.classList.remove('show');
        MenuNav.classList.remove('show');
        MenuBranding.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'))
        showMenu=false;

    }
}


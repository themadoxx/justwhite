function updateClassState(e) {
    
    var toggleMenuInfo = document.getElementsByClassName('ybc-menu-toggle')[0];    
    if (toggleMenuInfo.classList.contains('opened')){
        menu.classList.add('opened');
    }
    else{   
        menu.classList.remove('opened');
    }
}
var menu = document.getElementsByClassName('ets_mm_megamenu')[0];
menu.addEventListener('click', updateClassState);


function updateClassSubmenu(e) {
    
    for(var i = 0; i < submenu.length; i++){
        submenu[i].classList.remove('opened');
    }

    if (e.target.classList.contains('closed')){
        e.target.parentElement.classList.add('opened');
    }
    else{   
        e.target.parentElement.classList.remove('opened');
    }
}
var submenu = document.querySelectorAll('.mm_menus_li.mm_sub_align_full.mm_has_sub');
for(var i = 0; i < submenu.length; i++){
    submenu[i].addEventListener('click', updateClassSubmenu);
}




function subirtela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
        
    })
}

function decidirbotaoscroll(){
    if(window.scrollY===0){
        //*vamos ocultar o botão*//
        document.querySelector('.scroll-button').style.display='none';
    }
    else{
        //*vamos mostrar o botão*//
        document.querySelector('.scroll-button').style.display='block';
    }
}
window.addEventListener('scroll',decidirbotaoscroll);
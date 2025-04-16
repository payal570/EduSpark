//script file

// home section starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menulist = document.querySelector('.main-navbar .nav-list');
var menulistItems = document.querySelectorAll('.nav-list li a');

 menuBtn.addEventListener('click', function(){
     menuBtn.classList.toggle('active');
     menulist.classList.toggle('active');
 })

for(var i= 0; i < menulistItems.length; i++){
    menulistItems[i].addEventListener('click', menulistClicked);
}
function menulistClicked(){
    menuBtn.classList.remove('active');
    menulist.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
    if(window.scrollY > 120){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}



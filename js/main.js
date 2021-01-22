 //Variables
let hWindow = window.innerHeight;
let nav = document.querySelector('nav');
let scrolled2 = 0;


window.addEventListener('scroll', function(){
    let scrolled = window.pageYOffset;
    //console.log(scrolled + "pixels scrollés");

    if (scrolled > hWindow/2) {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }

    if(scrolled < scrolled2){
        nav.classList.remove("hide");
    } 
    scrolled2 = scrolled;
});



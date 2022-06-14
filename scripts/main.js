const checkbox1 = document.getElementById('checkbox1');
checkbox1.addEventListener('change', () =>{
        //change the theme of the website
        document.body.classList.toggle('light')
    }); 

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

var state=false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").style.display= "block";
        document.getElementById("eye-slash").style.display= "none";
        state=false;

    }
    else{
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").style.display= "none";
        document.getElementById("eye-slash").style.display= "block";
        state=true;
    }
}




// -- save json-server json-server-auth
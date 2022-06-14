let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".quadrate"); 
    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length
    for(i = 0; i < slides.length; i++){
        slides[i].style.opacity = "0"
    }
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace(" active","")
    }
    slides[slideIndex-1].style.opacity = "1";
    quadrates[slideIndex-1].className += " active";
}

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

// const checkbox1 = document.getElementById('checkbox1');
// checkbox1.addEventListener('change', () =>{
//         //change the theme of the website
//         document.body.classList.toggle('light')
//     }); 



// -- save json-server json-server-auth
const checkbox1 = document.getElementById('checkbox1');
checkbox1.addEventListener('change', () =>{
        //change the theme of the website
        document.body.classList.toggle('light')
        checkbox1.classList.toggle('form.loginbox__light')
    });
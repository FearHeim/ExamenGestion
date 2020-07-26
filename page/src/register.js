//Codico que permite el registro
//Se usan los datos del formulario

const singupForm = document.querySelector('#registerForm');

singupForm.addEventListener('submit', e=>{
    const email = document.querySelector('#Singin-email').value;
    const password = document.querySelector('#Singin-password').value;
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential=>{
            console.log("Registrado")
            alert("Registrado con exito, procede a loguearte")
            location.href="login.html"
        }).catch(function(a) {
            alert("Ocurrió un error")
        })
    
})



//Codico que permite el logueo
//Se usan los datos del formulario

const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', e=>{
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    e.preventDefault();


    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            console.log("Registrado")
            location.href="main.html"
        }).catch(function(a) {
            alert("Ocurrió un error")
        })
    
})

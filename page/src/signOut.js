let logout=document.querySelector('#logout')
logout.addEventListener('click', (o)=>{
        o.preventDefault();
    
        auth.signOut().then(()=>{

            location.href="index.html"
            console.log("User signed out")
        })
})
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

import { auth } from "./firebase.js";

import { showMessage } from "./showMessage.js";  

const signupForm = document.querySelector('#login-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = signupForm['login-email'].value;
    const password = signupForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth,email,password)        
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide();
        
        showMessage('bienvenido ' + credentials.user.email)

    } catch (error) {
        console.log(error)
        if (error.code === "auth/invalid-credential") {
            showMessage("Usuario o contraseñas incorrectas" , "error")
        } else  if (error.code === "auth/user-not-found"){
            showMessage("Usuario no encontrado" , "error")    
        } else {
            showMessage(error.message, 'error')
        }
    }
    

})
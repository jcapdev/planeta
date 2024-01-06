import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

import { auth } from "./firebase.js";

import { showMessage } from "./showMessage.js";  



const resetForm = document.querySelector('#login-form-reset');

resetForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = resetForm['login-email-reset'].value;
    
    console.log(email);
    
    try {
        const respass = await sendPasswordResetEmail(auth, email)
        console.log(respass)
        showMessage('Se envio un correo para restablecer tu contraseña')
    } catch (error) {
        showMessage(error.message, 'error')
    }
    

})










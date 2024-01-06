import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage} from "./showMessage.js"

 
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',async (e) => {
    e.preventDefault(e)    

   const email =  signupForm['signup-email'].value;
   const password =  signupForm['signup-password'].value;

   console.log(email,password);

try {
const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
console.log(userCredentials) 

const sigupModal = document.querySelector('#signupModal')
const modal = bootstrap.Modal.getInstance(sigupModal)
modal.hide()


showMessage("Registrado Usuario" + userCredentials.user.email)


} catch (error) {
    console.log(error.message)
    console.log(error.code)
    if (error.code === 'auth/email-already-in-use') {
        showMessage("correo ya esta en uso","error")
     }  
     else if (error.code === 'auth/weak-password') {
        showMessage("contraseña muy débil" ,"error")

    } else if (error.code === 'auth/invalid-email') {
        showMessage("correo incorrecto" ,"error")
    }
     else if (error.code) {
        showMessage("error desconocido" ,"error")
    }
}


   

})


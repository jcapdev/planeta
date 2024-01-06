
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

import {auth} from "./firebase.js";

/*se debe crear una ruta nueva ya que la conf de las rutas generan error
si se colocan en la misma direccion de las mismas funciona correctamente
*/ 

import {loginCheck} from "./loginCheck.js";


/*const {auth} = require('../app/firebase.js')

const {loginCheck} = require('../app/loginCheck.js')*/


import './signupForm.js';
import './logout.js';
import './signinForm.js';
import './googleLogin.js';
import './facebookLogin.js';
import './resetPassword.js';


// import '../app/signupForm.js';
// import '../app/logout.js';
// import '../app/signinForm.js';
// import '../app/googleLogin.js';
// import '../app/facebookLogin.js';
// import '../app/resetPassword.js';
// const sigupForm = document.querySelector('#sigup-form');

// sigupForm.addEventListener('submit',(e) =>{
//     e.preventDefault();
//    const email =  document.querySelector('#sigup-email').value;
//    const password =  document.querySelector('#sigup-password').value;
//    //console.log(sigupEmail,sigupPassword); 

//    auth.createUserWithEmailAndPassword(email,password)
//     .then((userCredential) => {
//         // Signed in 
//         //const user = userCredential.user;
//         console.log("Sig up")
//         //console.log(user);
//     })



// });


onAuthStateChanged(auth,async(user)=> {
     console.log(user);
    loginCheck(user);
    // if (user) {
    //     loginCheck(user)
    // }else {
    //     loginCheck(user)
    // }

})



console.log("Llegamos aqui");
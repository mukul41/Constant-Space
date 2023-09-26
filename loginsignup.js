import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {GoogleAuthProvider, signInWithRedirect ,getRedirectResult, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


//mukul
const firebaseConfig = {
  apiKey: "AIzaSyD20ZiwyKR-TFWjy5dlA0sQQlmtiuGdul4",
  authDomain: "constant-space-3763.firebaseapp.com",
  databaseURL: "https://constant-space-3763-default-rtdb.firebaseio.com",
  projectId: "constant-space-3763",
  storageBucket: "constant-space-3763.appspot.com",
  messagingSenderId: "267568677892",
  appId: "1:267568677892:web:40ef75189c623f04c46151"
};


// manish
// const firebaseConfig = {
//   apiKey: "AIzaSyBiOvvqkXQElMA-s6dw8gJhAfunktT9nEw",
//   authDomain: "constant-space-mani.firebaseapp.com",
//   projectId: "constant-space-mani",
//   storageBucket: "constant-space-mani.appspot.com",
//   messagingSenderId: "524034553111",
//   appId: "1:524034553111:web:04014b68a8be3e5aa87352",
//   measurementId: "G-VT5MMDTY7N"
// };

function JSalert(){
 
  swal("Congrats!", ", Your account is created!", "success");   
}

const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth(app);
console.log(app);



// Sign Up
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',(e)=>{

var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
 
const user = userCredential.user;
JSalert();
login();
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
  });
})

// Sign In
document.getElementById('btnLogin').addEventListener("click", (e)=>{
  var email = document.getElementById('luser').value;
  var password = document.getElementById('pswd').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "index.html";

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
})

// Sign In With Google
const provider = new GoogleAuthProvider(app);

document.getElementById('gogle').addEventListener("click", (e)=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    if(user)
    {
      window.location.href = "index.html";
    }
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})


  
  
  
  
  
 
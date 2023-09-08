import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

function newUser() {
  const newUserForm = document.createElement('section');

  newUserForm.innerHTML = `<img id="logo" src= "img/logo.png">
   <h2 id="title">Nuevos usuarios</h2>
    <form id="newUserUl">
        <ul id="register">
        <li><input id="name" type="text" placeholder="Nombre" required></li>
        <li><input id="email" type="email" placeholder="E-mail" required></li>
        <li><input id="password" type="password" placeholder="Contraseña" required></li>
        <li><input id="repeatPass" type="password" placeholder="Repetir contraseña" required></li>
        <li><button  id="registerSummit" type="submit">Registrar</button></li>
        </ul>
    </form>`;

  document.body.appendChild(newUserForm);
  const registerForm = document.getElementById('newUserUl');

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Para que el formulario no se envíe automáticamente.

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPass = document.getElementById('repeatPass').value;
    if (password !== repeatPass) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Crear un objeto con los valores capturados

    const userEmail = email;
    const userPassword = password;
    const userData = {
      name,
      email,
      password,
    };

    /* console.log(userData);
    console.log(userEmail);
    console.log(userPassword); */

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // ..
      });

    registerForm.reset();
  });

  return newUserForm;
}

export default newUser;

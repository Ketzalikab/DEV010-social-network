import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

function newUser(navigateTo) {
  const newUserForm = document.createElement('section');

  newUserForm.innerHTML = `<img id="logo" src= "img/logo.png">
   <h2 id="title">Nuevos usuarios</h2>
    <form id="newUserUl">
        <ul id="register">
        <li><input id="name" placeholder="Nombre" required></li>
        <li><input id="email" placeholder="E-mail" required></li>
        <li><input id="password" type=password placeholder="Contraseña" required> 
          <button id="btnEye1" class="eye"></button></li>
        <li><input id="repeatPass" type=password placeholder="Repetir contraseña" required>
        <button id="btnEye2" class="eye"></button></li>
        <li><button id="registerSummit">Registrar</button></li>
        </ul>
    </form>`;

  document.body.appendChild(newUserForm);
  const registerForm = document.getElementById('newUserUl');
  const btnEye = document.querySelectorAll('.eye');
  const passwordInput = document.getElementById('password');
  const repeatPasswordInput = document.getElementById('repeatPass');

  btnEye.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        repeatPasswordInput.type = 'text';
        btn.style.backgroundImage = 'url(assets/openEye.png)';
      } else {
        passwordInput.type = 'password';
        repeatPasswordInput.type = 'password';
        btn.style.backgroundImage = 'url(assets/shutEye.png)';
      }
    });
  });

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
    if (password.length <= 8) {
      alert('Prueba con una contraseña mas larga');
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
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        sendEmailVerification(user);
        alert('Te enviamos un correo');
        window.location.href = '/preferences';
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          alert('Este correo ya está en uso');
        } else {
          alert(errorMessage);
        }
      });

    // enviar correo de confirmación
    registerForm.reset();
  });

  return newUserForm;
}
export default newUser;

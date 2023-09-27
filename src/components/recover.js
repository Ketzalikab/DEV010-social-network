import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import firebaseApp from './firebase.js';


const auth = getAuth(firebaseApp);

function recover() {
  const logo = document.createElement('img');
  logo.setAttribute('src', './assets/logo256.png');
  logo.setAttribute('class', 'logoRecover');

  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Recuperar contraseña';

  // crear elementos para pedir el correo
  const emailRecover = document.createElement('input');
  emailRecover.setAttribute('id', 'emailRecover');
  emailRecover.setAttribute('type', 'email');
  emailRecover.setAttribute('placeholder', 'Correo electrónico');

  const btnSendEmail = document.createElement('button');
  btnSendEmail.setAttribute('id', 'btnSendEmail');
  btnSendEmail.textContent = 'Enviar correo';

  const showAlert = document.createElement('span');
  showAlert.setAttribute('id', 'showAlert');

  // evento del boton enviar correo
  btnSendEmail.addEventListener('click', () => {
    const email = emailRecover.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showAlert.innerHTML = 'Correo electrónico enviado, por favor revisa tu correo para cambiar tu contraseña';
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      })
      .catch(() => {
        showAlert.innerHTML = 'Correo electrónico no encontrado';
      });
  });

  // Mostrar los elementos creados
  section.append(logo, title, emailRecover, btnSendEmail, showAlert);
  return section;
}

export default recover;

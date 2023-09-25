/* function preferences(navigateTo) {
  const prefer = document.createElement('section');

  prefer.innerHTML = `<img src=""></img>
       <h2 id="Why">¿Por qué estás aqui?</h2>
        <article id="userType">
            <ul id="pref">
            <li class="liPref"><button id="teacher" value="teacher" class="ask" name="userType">
              <img src= "img/teacher.png" class="icon">
              <p class="options"> Soy profesor frente a grupo, quiero aportar y recibir ideas </p></button> </li>
            <li class="liPref"><button id="kidsTeacher" value="kids" class="ask" name="userType">
              <img src= "img/books.png"  class="icon">
              <p class="options">Soy pedagogo, quiero aportar y recibir ideas</li>
            <li class="liPref"><button id="creative" value="creator" class="ask" name="userType">
              <img src= "img/creativity.png" class="icon">
              <p class="options">Solo vengo por inspiración</button></li>
            <li class="liPref"><button id="artist" value="artist" class="ask" name="userType">
              <img src= "img/inspiration.png" class="icon">
            <p class="options">Soy arte educador/mediador, quiero aportar y recibir ideas</button></li>
            </ul>
        </article>`;

  document.body.appendChild(prefer);

  // Metemos en una variable la selección del usuario para usarla mas adelante en el desarrollo.
  const userTypeForm = document.getElementById('userType');
  userTypeForm.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (e.target.name === 'userType') {
      const userTypeValue = e.target.value;
      console.log(userTypeValue);
    }
    // window.location.href = '/tl';
  });
  return prefer;
}

export default preferences; */

import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, doc, setDoc,
} from 'firebase/firestore';

const userImage = document.createElement('img');

function preferences() {
  const prefer = document.createElement('section');

  prefer.innerHTML = `<img src= ""></img>
  <h2 id="Why">¿Por qué estás aqui?</h2>
        <article id="userType">
            <ul id="pref">
            <li class="liPref"><button id="teacher" value="teacher" class="ask" name="userType" data-image="img/teacher.png">
              <img src= "img/teacher.png" class="icon">
              <p class="options"> Soy profesor frente a grupo, quiero aportar y recibir ideas </p></button> </li>
            <li class="liPref"><button id="kidsTeacher" value="kids" class="ask" name="userType" data-image="img/books.png" >
              <img src= "img/books.png"  class="icon">
              <p class="options">Soy pedagogo, quiero aportar y recibir ideas</li>
            <li class="liPref"><button id="creative" value="creator" class="ask" name="userType" data-image="img/creativity.png">
              <img src= "img/creativity.png" class="icon">
              <p class="options">Solo vengo por inspiración</button></li>
            <li class="liPref"><button id="artist" value="artist" class="ask" name="userType" data-image="img/inspiration.png"> 
              <img src= "img/inspiration.png" class="icon">
              <p class="options">Soy arte educador/mediador, quiero aportar y recibir ideas</button></li>
            </ul>
        </article>
        <div id="nameInputDiv">
          <label for="userName">Tu Nombre:</label>
          <input type="text" id="userName" placeholder="Tu Nombre">
        </div>
        <button id="savePreferences">Guardar Preferencias</button>`;

  document.body.appendChild(prefer);
  // seleccionar tipo de usuario
  const userTypeForm = document.getElementById('userType');
  let selectedUserType = null;

  userTypeForm.addEventListener('click', (e) => {
    if (e.target.name === 'userType') {
      selectedUserType = e.target.value;
      const imageURL = e.target.getAttribute('data-image');
      localStorage.setItem('selectedImage', imageURL);
      userImage.setAttribute('src', imageURL);
      console.log('imageURL:', imageURL);

      const userName = document.getElementById('userName').value;
      localStorage.setItem('selectedUserName', userName);
      console.log('selectedUserName:', userName);
    }
  });

  // Manejar el guardado de preferencias
  const savePreferencesButton = document.getElementById('savePreferences');
  const userNameInput = document.getElementById('userName');

  savePreferencesButton.addEventListener('click', () => {
    if (!selectedUserType) {
      alert('Selecciona un tipo de usuario antes de continuar.');
      return Promise.reject('Tipo de usuario no selccionado');
    }

    // obtienes el nombre de tu usuario
    const userName = userNameInput.value.trim();

    // verificar si hay nombre
    if (userName === '') {
      alert('Ingresa tu nombre antes de continuar.');
      return Promise.reject('Nombre de usuario no ingresado');
    }
    localStorage.setItem('selectedUserName', userName);
    const user = getAuth().currentUser;
    if (user) {
      const userId = user.uid;
      const firestore = getFirestore();

      const usuariosCollection = collection(firestore, 'usuarios');

      const nuevoUsuario = {
        nombre: userName,
        email: user.email,
        userType: selectedUserType,
      };

      return setDoc(doc(usuariosCollection, userId), nuevoUsuario)
        .then(() => {
          console.log('Preferencias guardadas correctamente.');
          window.location.href = './timeLine';
        })
        .catch((error) => {
          console.log.error('Error al guardar preferencias:', error);
        });
    }
    return Promise.reject('Usuario no autenticado');
  });

  return prefer;
}

export default preferences;

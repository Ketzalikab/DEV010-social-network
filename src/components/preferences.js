function preferences(navigateTo) {
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

export default preferences;

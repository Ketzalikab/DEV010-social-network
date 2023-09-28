import { getAuth } from 'firebase/auth';
import firebaseApp from './firebase.js';
import createPost from './firestoreCreate.js';
import postCreate from './postCreate.js';

const auth = getAuth(firebaseApp);

function TimeLine() {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionTimeLine');
  section.setAttribute('class', 'timeLineStyle');

  const logoTimeLine = document.createElement('img');
  logoTimeLine.setAttribute('id', 'logoTimeLine');
  logoTimeLine.setAttribute('class', 'timeLineLogo');
  logoTimeLine.setAttribute('src', './assets/logo256.png');

  logoTimeLine.addEventListener('click', () => {
    window.location.reload();
  });

  const btnClose = document.createElement('img');
  btnClose.setAttribute('id', 'btnClose');
  btnClose.setAttribute('src', './assets/close.png');

  btnClose.addEventListener('click', () => {
    window.location.href = './';
  });

  const sectionPosts = document.createElement('section');
  sectionPosts.setAttribute('id', 'sectionPosts');
  sectionPosts.setAttribute('class', 'postSection');

  const commentInput = document.createElement('textarea');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('id', 'commentInput');
  commentInput.setAttribute('placeholder', '¿Qué compartes hoy?');

  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'sendButton');
  sendButton.textContent = 'Enviar';

  const commentList = document.createElement('ul');
  commentList.setAttribute('id', 'commentList');

  let isEditing = false;
  let isLiking = false;
  let likes = 0;
  let nameLike;

  const userContainer = document.createElement('div');
  userContainer.setAttribute('class', 'user-container');

  const selectedImage = localStorage.getItem('selectedImage');
  if (selectedImage) {
    const userImage = document.createElement('img');
    userImage.setAttribute('id', 'userImage');
    userImage.setAttribute('class', 'user-image');
    userImage.setAttribute('src', selectedImage);
    console.log('Imagen del usuario establecida correctamente:', selectedImage);
    userContainer.appendChild(userImage); // Agregar userImage al userContainer
  } else {
    console.log('No se encontró una imagen de usuario en el localStorage.');
  }

  const selectedUserName = localStorage.getItem('selectedUserName');
  if (selectedUserName) {
    const userNameElement = document.createElement('p');
    userNameElement.textContent = selectedUserName;
    userNameElement.setAttribute('class', 'user-name');
    userContainer.appendChild(userNameElement); // Agregar userNameElement al userContainer
  } else {
    console.log('No se encontró un nombre de usuario en el localStorage.');
  }

  const btnLike = document.createElement('img');
  btnLike.setAttribute('id', 'btnLike');
  btnLike.setAttribute('src', './assets/unlike.png');

  const sumLikes = document.createElement('span');
  sumLikes.setAttribute('id', 'sumLikes');
  sumLikes.innerHTML = likes;

  // cliks
  /* sendButton.addEventListener('click', () => {
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
      const commentContainer = document.createElement('li');
      commentContainer.setAttribute('class', 'commentContainer');

      const commentTextarea = document.createElement('textarea');
      commentTextarea.value = commentText;
      commentTextarea.setAttribute('class', 'commentTextarea');
      commentTextarea.setAttribute('name', 'commentTextarea');
      commentTextarea.setAttribute('readonly', 'true');

      commentTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          if (isEditing) {
            isEditing = false;
            commentTextarea.setAttribute('readonly', 'true');
            commentTextarea.blur();
          }
        }
      });

      const editLink = document.createElement('a');
      editLink.textContent = 'Editar';
      editLink.classList.add('action-link');
      editLink.addEventListener('click', () => {
        isEditing = true;
        commentTextarea.removeAttribute('readonly');
        commentTextarea.focus();
      });

      const deleteLink = document.createElement('a');
      deleteLink.textContent = 'Borrar';
      deleteLink.classList.add('action-link');
      deleteLink.addEventListener('click', () => {
        const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar esta entrada?');
        if (shouldDelete) {
          commentContainer.remove();
        }
      });

      editLink.addEventListener('click', () => {
        isEditing = true;
        commentTextarea.removeAttribute('readonly');
        commentTextarea.focus();
      });

      deleteLink.addEventListener('click', () => {
        const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar este comentario?');
        if (shouldDelete) {
          commentContainer.remove();
        }
      });

      btnLike.addEventListener('click', () => {
        if (!isLiking) {
          btnLike.setAttribute('src', './assets/like.png');
          likes += 1;
          isLiking = true;
        } else {
          btnLike.setAttribute('src', './assets/unLike.png');
          likes -= 1;
          isLiking = false;
        }
        console.log(isLiking);
        sumLikes.innerHTML = likes;
      });

      const likeContainer = document.createElement('div');
      likeContainer.setAttribute('class', 'liking');
      likeContainer.appendChild(btnLike);
      likeContainer.appendChild(sumLikes);

      const commentButtonsDiv = document.createElement('div');
      commentButtonsDiv.setAttribute('class', 'commentButtons');
      commentButtonsDiv.appendChild(editLink);
      commentButtonsDiv.appendChild(deleteLink);

      commentContainer.appendChild(commentButtonsDiv);
      commentContainer.appendChild(commentTextarea);
      commentContainer.appendChild(likeContainer);
      commentList.appendChild(commentContainer);

      commentList.classList.add('visible');
      commentList.style.display = 'block';
      commentInput.value = '';

      // mandar post a DB (userID, icon, idLikes, post, time)
      nameLike = '';
      createPost(selectedUserName, selectedImage, nameLike, commentText);
    }
  }); */

  sendButton.addEventListener('click', () => {
    const commentText = commentInput.value;
    const postLi = postCreate(selectedImage, selectedUserName, commentText);
    commentList.appendChild(postLi);
  });

  sectionPosts.appendChild(userContainer);
  sectionPosts.appendChild(commentInput);
  sectionPosts.appendChild(sendButton);
  sectionPosts.appendChild(commentList);
  section.append(
    logoTimeLine,
    btnClose,
    sectionPosts,
  );

  return section;
}

export default TimeLine;

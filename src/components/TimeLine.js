import { getAuth } from 'firebase/auth';
import firebaseApp from './firebase.js';
import postCreate from './postCreate.js';
import getPost from './firestoreRecover.js';
import savePost from './db.js';

getAuth(firebaseApp);
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

  const userContainer = document.createElement('div');
  userContainer.setAttribute('class', 'user-container');
  const selectedImage = localStorage.getItem('selectedImage');
  if (selectedImage) {
    const userImage = document.createElement('img');
    userImage.setAttribute('id', 'userImage');
    userImage.setAttribute('class', 'user-image');
    userImage.setAttribute('src', selectedImage);
    // console.log('Imagen del usuario establecida correctamente:', selectedImage);
    userContainer.appendChild(userImage); // Agregar userImage al userContainer
  } else {
    // console.log('No se encontró una imagen de usuario en el localStorage.');
  }
  const selectedUserName = localStorage.getItem('selectedUserName');
  if (selectedUserName) {
    const userNameElement = document.createElement('p');
    userNameElement.textContent = selectedUserName;
    userNameElement.setAttribute('class', 'user-name');
    userContainer.appendChild(userNameElement); // Agregar userNameElement al userContainer
  } else {
    // console.log('No se encontró un nombre de usuario en el localStorage.');
  }

  // commentList.appendChild(olderPost);
  sendButton.addEventListener('click', () => {
    const commentText = commentInput.value;
    savePost(selectedUserName, selectedImage, commentText);
    const likes = 0;
    const postLi = postCreate(selectedImage, selectedUserName, likes, commentText);
    commentList.prepend(postLi);
    commentInput.value = '';
    // commentList.appendChild(postLi);
  });

  window.addEventListener('DOMContentLoaded', () => {
    getPost().then((olderPosts) => {
      olderPosts.forEach((oldPost) => {
        const rcvrID = oldPost.userID;
        const rcvrIcon = oldPost.icon;
        const rcvrPost = oldPost.post;
        const rcvrLikes = oldPost.likes;
        const rcvrPID = oldPost.id;
        // asegurarnos que el array de likes tenga datos para usar el some
        const whoLikes = oldPost.whoLikes || [];
        const isLiking = whoLikes.some((user) => user === selectedUserName);
        const recoverLi = postCreate(rcvrIcon, rcvrID, rcvrLikes, rcvrPost, rcvrPID, isLiking);
        commentList.appendChild(recoverLi);
      });
    });
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

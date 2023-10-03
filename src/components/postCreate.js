import editPost from './firestoreEdit';
import likes from './likes.js';

function postCreate(userImage, userName, numberLikes, postText, idPost) {
  // console.log('entra a postCreate');
  // crear el li que contenga
  const liPost = document.createElement('li');
  liPost.setAttribute('id', idPost);
  liPost.classList.add('commentContainer');

  // icono, nombre, botones de editar y borrar, post y boton de like
  // ICONO
  const imgUser = document.createElement('img');
  imgUser.setAttribute('id', 'userImage');
  imgUser.setAttribute('class', 'userImagePost');
  imgUser.setAttribute('src', userImage);

  // NOMBRE
  const nameUser = document.createElement('p');
  nameUser.textContent = userName;
  nameUser.setAttribute('class', 'user-name');

  // BOTONES DE EDITAR Y BORRAR
  const containerButtons = document.createElement('div');
  containerButtons.setAttribute('class', 'postButtons');

  const deleteLink = document.createElement('a');
  deleteLink.textContent = 'Borrar';
  deleteLink.classList.add('action-link');

  const editLink = document.createElement('a');
  editLink.textContent = 'Editar';
  editLink.classList.add('action-link');
  containerButtons.appendChild(editLink);
  containerButtons.appendChild(deleteLink);

  // AREA DEL POST
  const commentTextarea = document.createElement('textarea');
  commentTextarea.value = postText;
  commentTextarea.setAttribute('class', 'commentTextarea');
  commentTextarea.setAttribute('name', 'commentTextarea');
  commentTextarea.setAttribute('readonly', 'true');

  // ACCION DE EDITAR
  let postId;
  let isEditing = false;
  editLink.addEventListener('click', () => {
    postId = liPost.id;
    isEditing = true;
    commentTextarea.removeAttribute('readonly');
    commentTextarea.focus();
  });
  commentTextarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isEditing) {
        const newPost = commentTextarea.value;
        editPost(postId, newPost);
        commentTextarea.setAttribute('readonly', 'true');
        commentTextarea.blur();
        isEditing = false;
      }
    }
  });

  // BOTON DE LIKE
  let isLiking = false;
  const containerLikes = document.createElement('div');
  containerLikes.setAttribute('class', 'likeArea');

  const btnLike = document.createElement('img');
  btnLike.setAttribute('id', 'btnLike');
  btnLike.setAttribute('src', './assets/unlike.png');
  const sumLikes = document.createElement('span');
  sumLikes.setAttribute('id', 'sumLikes');
  sumLikes.innerHTML = numberLikes;
  btnLike.addEventListener('click', () => {
    if (!isLiking) {
      btnLike.setAttribute('src', './assets/like.png');
      likes(isLiking, numberLikes);
      isLiking = true;
    } else {
      btnLike.setAttribute('src', './assets/unLike.png');
      likes(isLiking, numberLikes);
      isLiking = false;
    }
  });

  containerLikes.appendChild(btnLike);
  containerLikes.appendChild(sumLikes);

  liPost.appendChild(imgUser);
  liPost.appendChild(nameUser);
  liPost.appendChild(containerButtons);
  // liPost.appendChild(editLink);
  // liPost.appendChild(deleteLink);
  liPost.appendChild(commentTextarea);
  // liPost.appendChild(btnLike);
  // liPost.appendChild(sumLikes);
  liPost.appendChild(containerLikes);

  return liPost;
}

export default postCreate;

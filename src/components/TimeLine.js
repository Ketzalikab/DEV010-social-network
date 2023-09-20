import firebaseApp from './firebase';

function TimeLine(navigateTo) {
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

  sendButton.addEventListener('click', () => {
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
      const commentContainer = document.createElement('li');
      commentContainer.setAttribute('class', 'commentContainer');

      const commentTextarea = document.createElement('textarea');
      commentTextarea.value = commentText;
      commentTextarea.setAttribute('class', 'commentTextarea');
      commentTextarea.setAttribute('id', 'commentTextarea');
      commentTextarea.setAttribute('readonly', 'true');

      commentTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          if (isEditing) {
            this.style.height = 'auto';
            this.style.height = `${this.scrollHeight}px`;
          } else {
            this.value = commentText;
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
        const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar este comentario?');
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
      const commentButtonsDiv = document.createElement('div');
      commentButtonsDiv.setAttribute('class', 'commentButtons');
      commentButtonsDiv.appendChild(editLink);
      commentButtonsDiv.appendChild(deleteLink);

      commentContainer.appendChild(commentTextarea);
      commentContainer.appendChild(commentButtonsDiv);
      commentList.appendChild(commentContainer);

      commentList.classList.add('visible');
      commentList.style.display = 'block';
      commentInput.value = '';
    }
  });

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

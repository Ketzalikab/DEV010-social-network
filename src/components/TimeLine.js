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

      const commentDiv = document.createElement('div');
      commentDiv.textContent = commentText;
      commentDiv.setAttribute('class', 'commentTextarea');

      /* const commentTextDiv = document.createElement('div');
      commentTextDiv.textContent = commentText; */

      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.setAttribute('class', 'editButton');
      editButton.addEventListener('click', () => {
        if (!isEditing) {
          commentDiv.setAttribute('contenteditable', 'true');
          commentDiv.focus();
          editButton.textContent = 'Enviar';
          isEditing = true;
        } else {
          commentDiv.setAttribute('contenteditable', 'false');
          editButton.textContent = 'Editar';
          isEditing = false;
        }

        /* commentInput.value = commentText;
        commentContainer.remove(); */
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Borrar';
      deleteButton.setAttribute('class', 'deleteButton');
      deleteButton.addEventListener('click', () => {
        const shouldDelete = window.confirm('¿Estás seguro de que deseae borrar este comentario?');
        if (shouldDelete) {
          commentContainer.remove();
        }
      });
      const commentButonsDiv = document.createElement('div');
      commentButonsDiv.setAttribute('class', 'commentButtons');
      commentButonsDiv.appendChild(editButton);
      commentButonsDiv.appendChild(deleteButton);

      commentContainer.appendChild(commentDiv);
      commentContainer.appendChild(commentButonsDiv);
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

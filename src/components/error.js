function error() {
  const section = document.createElement('section');

  const errorImage = document.createElement('img');
  errorImage.setAttribute('src', './assets/404.png');
  errorImage.setAttribute('id', 'imgError');

  const title = document.createElement('h3');
  title.textContent = 'Error 404';

  const title2 = document.createElement('h3');
  title2.textContent = 'Página no encontrada';

  section.append(errorImage, title, title2);

  return section;
}

export default error;

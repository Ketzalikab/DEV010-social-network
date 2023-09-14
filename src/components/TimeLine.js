function TimeLine(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Welcome to my social network';
  section.append(title);
  return section;
}

export default TimeLine;

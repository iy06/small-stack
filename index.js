document.addEventListener('DOMContentLoaded', (event) => {
  
  const title = document.getElementById('header-title');

  title.addEventListener('mouseover', () => {
    title.classList.add("title");
  });

  title.addEventListener('mouseout', () => {
    title.removeAttribute("class");
  });

});
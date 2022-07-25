const toolbar = document.querySelector(".toolbar");
const avatar = document.querySelector(".avatar");

// toggle toolbar
const toogleToolbar = () => {
  toolbar.classList.toggle("open");
};

avatar.addEventListener("click", toogleToolbar);

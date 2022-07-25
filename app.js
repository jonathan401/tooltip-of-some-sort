const toolbar = document.querySelector(".toolbar");
const avatar = document.querySelector(".avatar");
const button = document.querySelector("button");

// change toolbar direction
button.addEventListener("click", () => {
  toolbar.classList.toggle("from-left");
});

// toggle toolbar
const toogleToolbar = () => {
  // console.log(avatar.offsetWidth);
  toolbar.classList.toggle("open");
};

avatar.addEventListener("click", toogleToolbar);

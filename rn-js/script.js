const btn = document.querySelector(".btn");

const list = document.querySelector(".list");

btn.addEventListener("click", () => {
  list.classList.toggle("active");
  console.log("Clicked");
});

import("./app/app").then((app) => {
  const myGame = new app.GameApp();
});

const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("splash-display-none");
  }, 2000);
});

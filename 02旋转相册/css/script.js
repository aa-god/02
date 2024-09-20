// script.js
document.addEventListener("DOMContentLoaded", function() {
  const sakuraContainer = document.body;

  for (let i = 0; i < 50; i++) {
    createSakura();
  }

  function createSakura() {
    const sakura = document.createElement("div");
    sakura.className = "sakura";
    sakura.style.left = `${Math.random() * 100}vw`;
    sakura.style.animationDuration = `${Math.random() * 3 + 2}s`;
    sakuraContainer.appendChild(sakura);

    sakura.addEventListener("animationend", function() {
      sakura.remove();
      createSakura();
    });
  }
});

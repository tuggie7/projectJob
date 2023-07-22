document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("menuToggle");
  
    toggleButton.addEventListener("click", (e) => {
      e.preventDefault();
      let flyMenu = document.getElementById("menuContent");
      if (flyMenu.style.display === "none" || flyMenu.style.display === "") {
        flyMenu.style.display = "flex";
      } else {
        flyMenu.style.display = "none";
      }
    });
  });
  
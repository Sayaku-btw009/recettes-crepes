const bouton = document.getElementById("bouton-prepa");
const preparation = document.getElementById("preparation");

bouton.addEventListener("click", function () {
  if (preparation.style.display === "none") {
    preparation.style.display = "block";
    bouton.textContent = "Masquer la préparation";
  } else {
    preparation.style.display = "none";
    bouton.textContent = "Afficher la préparation";
  }
});
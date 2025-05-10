function toggleMenu() {
  const menu = document.getElementById("menu-opcoes");
  if (menu.style.display === "block") {
    menu.style.display = "none"; //Esconde o menu
  } else {
    menu.style.display = "block"; //Mostra o menu
  }
}

//Fecha o menu se clicar fora dele
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu-opcoes");
  const toggle = document.getElementById("menu-toggle");

  //Verifica se o clique não foi no botão e nem no menu
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

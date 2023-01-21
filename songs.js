var menuPage = document.getElementById("menu-page");
var homeIcon = document.getElementById("home-icon-container");
var menuIcon = document.getElementById("menu-icon");
var iconHeader = document.getElementById('icon-header');
var display = 0;

function showMenuPage(){
  if (display == 0){
    homeIcon.style.display = "none";
    menuPage.style.display = "block";
    menuIcon.src = "close.png";
    iconHeader.style.display = "none";
    display = 1;
  }else{
    homeIcon.style.display = "inline-block";
    menuPage.style.display = "none";
    menuIcon.src = "menu.png";
    iconHeader.style.display = "initial";
    display = 0;
  }
}
//window.addEventListener("load", myFunction, false);

function menuPrincipal() {
boto = document.getElementById("logo_menu");
  var x = document.getElementById("menu_desplegat");
    if (x.style.display === "none") {
        document.getElementById("logo_menu").style.backgroundPosition = "0 -298px";   
        x.style.display = "block";
    } else {
        x.style.display = "none";
        document.getElementById("logo_menu").style.backgroundPosition = "0 -31px";   
    }
}

function menuJugar(){
    boto1 = document.getElementById("ajugar");
    icon3 = document.getElementsByClassName("id_icon3");
    var x = document.getElementById("menu_jugar");
    if (x.style.display === "none") {
     //   document.getElementById("logo_menu").style.backgroundPosition = "0 -298px";   
        x.style.display = "block";
        icon3.style.backgroundPosition = "0 -373px";  
    } else {
        x.style.display = "none";
        icon3.style.backgroundPosition = "0 -473px";  
       // document.getElementById("logo_menu").style.backgroundPosition = "0 -31px";   
    }
}




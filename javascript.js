menuBar = document.querySelector(".fa-bars");
    menuBar.onclick = function (){
        sidemenu = document.querySelector("#sidemenu");
        sidemenu.classList.toggle("active");
    }
listitem = document.querySelector("#listitem");
listitem.onclick = function (){
    sidemenu.classList.toggle("active");
    listitem.classList.remove("#sidemenu");
}


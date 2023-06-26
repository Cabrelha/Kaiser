
var addBtn = document.querySelector("#addbottom2 a");
var popup = document.querySelector("#popupbackground2");
var closeBtn = document.querySelector("#popup2 form a");
var form = document.getElementById("pou2") // <--tentando colocar um botão de envio

addBtn.addEventListener("click", ()=>{
    popup.style.display = "flex";
    popup.style.transition = "display 5s";
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})
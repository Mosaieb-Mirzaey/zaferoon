
let closeNav = document.querySelector(".closeNav");
let openNav = document.querySelector(".openNav");
let mySidebar = document.querySelector("#mySidebar")




openNav.addEventListener('click' , function () {

    openNav.style.display = "none"
    closeNav.style.display = "inline-block"
    closeNav.style.right = "137px"
    closeNav.style.top = "12px"
    mySidebar.style.right = "auto";
    mySidebar.style.width = "150px";
    mySidebar.style.transition = "all 2s ease 0s";

})

closeNav.addEventListener('click' , function () {

    closeNav.style.display = "none"
    openNav.style.display = "inline-block"
    mySidebar.style.right = "-300px";
    mySidebar.style.width = "0px";
    mySidebar.style.transition = "all 2s ease 0s";

})









// function openNav() {
//     document.querySelector("#mySidebar").style.transition = "2s";
//
//     document.querySelector("#mySidebar").style.display = "block";
//
// }

// function closeNav() {
//     document.querySelector("#mySidebar").style.display = "none";
// }

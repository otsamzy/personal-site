const menuBtn = document.querySelector(".handburger-menu"),
nav = document.querySelector("nav"),
header = document.querySelector(".hearder"),
headerList = document.querySelectorAll("nav .list-menu li");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
});

document.addEventListener("scroll", () => {
    let scrollStyle = window.scrollY;
    if(scrollStyle > 250){
        header.style.backgroundColor ="black";
    } else{
        header.style.backgroundColor = "rgba(0, 0, 0, .2)"
    }
});


headerList.forEach(item =>{
    item.addEventListener("click", ()=> {
        nav.classList.toggle("active")
    })
})
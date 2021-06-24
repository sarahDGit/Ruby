const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click",(e)=>{
    text.classList.toggle("show-more");
    if(readMoreBtn.innerText === "Voir Plus"){
        readMoreBtn.innerText = "Voir Moins";
    } else {
        readMoreBtn.innerText = "Voir Plus";
    }
})
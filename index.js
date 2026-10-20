// dropdown

function showMenu(event) {
event.preventDefault();
    let menu = document.getElementById("menu");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


// slider

let slides = document.getElementById("slides");

let index=0;
let totalimage=slides.children.length;
function imageshow(){
    index++;
    if(index>=totalimage){
        index=0;
    }
    slides.style.transform=`translateX(-${index*100}%)`;
}
setInterval(imageshow,3000);

// navbar 

function toggleNav() {
    let nav = document.querySelector(".logocon");
    let icon = document.getElementById("menuIcon");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}

// box 
function slide(direction){
    let box=document.querySelector(".box9");
    let card=document.querySelector(".box99");

    box.scrollBy({
        left:direction*(card.offsetWidth+15),
        behavior:"smooth"
    });

}

// cart
let count=0;

let buttons=document.querySelectorAll(".bot button");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        count++;
        document.getElementById("cartcount").innerText=count;
        button.innerText="ADDED TO CART";
    });
});

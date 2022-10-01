 
 const openMenu = document.querySelector(".icon-menu");
 const nav = document.querySelector("nav");

window.onscroll = () =>{
   nav.classList.remove("active");
}

openMenu.addEventListener('click', () => {
   nav.classList.toggle('active');
})
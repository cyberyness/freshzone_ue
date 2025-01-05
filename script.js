const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

if (modal && modalImg) {
    document.querySelectorAll(".gallery-grid img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}


const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active")
}); 


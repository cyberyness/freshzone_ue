const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.onclick = () => {
        modal.style.display = "flex"; // Show modal
        modalImg.src = img.src;      // Set image source
    };
});

modal.onclick = () => {
    modal.style.display = "none"; // Hide modal when clicked
};



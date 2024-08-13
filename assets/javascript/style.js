
function displayImage(imageId) {
    const imageSrc = document.getElementById(imageId).src;
    const displayDiv = document.getElementById('image-selected');
    displayDiv.innerHTML = `<img class="zoom-img" src="${imageSrc}" alt="Displayed Image">`;

    const img = displayDiv.querySelector('img');
    let x = 1.5; 

    img.addEventListener("mousemove", (e) => {
        img.classList.add("magnify");
        let posX = e.offsetX / img.width * 100;
        let posY = e.offsetY / img.height * 100;
        
        img.style.transformOrigin = `${posX}% ${posY}%`;
        img.style.transform = `scale(${x})`;
    });

    img.addEventListener("mouseout", () => {
        img.classList.remove("magnify");
        img.style.transform = "none";
    });
}

window.onload = function() {
    displayImage('image6'); 
}







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

function displayVideo() {
    const displayDiv = document.getElementById('image-selected');
    displayDiv.innerHTML = `
        <iframe class="video-slider" id="video1" src="https://player.vimeo.com/video/551517271" alt="Video" 
        onclick="displayVideo('video1')" style="cursor: pointer;" 
        frameborder="0"></iframe>`;
}

function activateVideoCarousel() {
    const carousel = document.querySelector('#veritical-demo-medium');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const videoItems = carouselInner.querySelectorAll('.carousel-item iframe');

    if (videoItems.length > 0) {
        carouselInner.querySelectorAll('.carousel-item').forEach(item => {
            item.classList.remove('active');
        });

        const firstVideoItem = videoItems[0].closest('.carousel-item');
        firstVideoItem.classList.add('active');

        const bootstrapCarousel = new bootstrap.Carousel(carousel);
        const videoItemIndex = Array.from(carouselInner.children).indexOf(firstVideoItem);
        bootstrapCarousel.to(videoItemIndex);
    } else {
        console.error("No video items found in the carousel.");
    }
}




document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
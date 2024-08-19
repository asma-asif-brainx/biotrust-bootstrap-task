// Vertical corousal
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.vertical-corousal');
    const items = document.querySelectorAll('.vertical-item');
    const itemHeight = items[0].clientHeight;
    let index = 0;
    document.querySelector('.multi-vertical-next').addEventListener('click', () => {
        if (index < items.length - 1) {
            index++;
            carousel.style.transform = `translateY(-${index * itemHeight}px)`;
        }
    });
    document.querySelector('.multi-vertical-prev').addEventListener('click', () => {
        if (index > 0) {
            index--;
            carousel.style.transform = `translateY(-${index * itemHeight}px)`;
        }
    });
});

//  When image is clicked from the vertical corousal, display that image in a seperate div and magnify image on hover
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

// Display the video from the vertical corousal
function displayVideo() {
    const displayDiv = document.getElementById('image-selected');
    displayDiv.innerHTML = `
        <iframe class="video-slider" id="video1" src="https://player.vimeo.com/video/551517271" alt="Video" 
        onclick="displayVideo('video1')" style="cursor: pointer;" 
        frameborder="0"></iframe>`;
}

// Clicking watch button displays the video in tab, mobile screens
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

// Tooltip js
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
function displayImage(imageId) {
    const imageSrc = document.getElementById(imageId).src;
    const displayDiv = document.getElementById('image-selected');
    displayDiv.innerHTML = `<img class="zoom-img" src="${imageSrc}" alt="Displayed Image">`;
}
    window.onload = function() {
    displayImage('image6');
}

// var options={
//     width:400,
//     height:200,
//     zoomWidth:500,
//     offset:{vertical:0, horizontal:0},
//     scale:1.5
// }

// new ImageZoom(document.getElementById('image-selected') , options);
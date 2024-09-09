document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const containerWidth = slider.offsetWidth;
    const images = document.querySelectorAll('.slider .slider-item');
    const imageCount = images.length;
    const imageWidth = 20; // Set the width to 20rem
    const margin = 1; // Assuming a margin of 1rem

    // Calculate total width after adding clones
    const totalWidth = (imageWidth + margin) * imageCount + 'rem'; // Total width including margins
    slider.style.width = totalWidth;

    // Clone images
    const cloneCount = Math.ceil(containerWidth / (imageWidth + margin)); // Number of clones to fill the container
    for (let i = 0; i < cloneCount; i++) {
        images.forEach(img => {
            slider.appendChild(img.cloneNode(true));
        });
    }

    // Add animation class
    slider.classList.add('slide-animation');


    // setInterval(()=>{
        fetch("https://muslimsalat.com/srinagar.json")
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch(error=>console.log(error))
    // },1000);
});
 


var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

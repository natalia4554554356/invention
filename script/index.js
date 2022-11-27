const header = document.querySelector(".header1");
const header_inner_image = header.querySelector('.header__inner_image1');
const images = [];
const main = document.querySelector('.main1');
const main_top = main.getBoundingClientRect().top;

const scrollToMain = () => {
    window.scrollTo({
        top: main_top,
        behavior: 'smooth',
    });
}

let current_index = 1;
for (let i = 1; i <= 3; i++) {
    let image = new Image();
    image.src = `assets/self_photos/self_photo_${i}.jpg`;
    images.push(image);
}

header.style.backgroundImage = `url(${images[0].src})`;
header_inner_image.src = `${images[0].src}`;

setInterval(() => {
    header.style.backgroundImage = `url(${images[current_index].src})`;
    header_inner_image.src = `${images[current_index].src}`;
    if (current_index === images.length - 1)
        current_index = 0;
    else
        current_index++;
}, 1000);

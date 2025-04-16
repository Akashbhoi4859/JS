const img_slider = document.querySelectorAll('.slide')
let temp = 0;
img_slider.forEach((img, ind) => {
    img.style.left = `${ind * 100}%`
})

const slider = () => {
    img_slider.forEach((item) => {
        item.style.transform = `translateX(-${temp * 100}%)`
    })
}

const prev = () => {
    temp = (temp - 1 + img_slider.length) % img_slider.length;
    slider();
}

const next = () => {
    temp = (temp + 1) % img_slider.length;
    slider();
}

setInterval(() => {
    temp = (temp + 1) % img_slider.length;
    slider();
},2000);
import * as fs from 'fs';
var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    zoom: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        invert: true,
      },
});
(function () {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        
        let sale = processData(),
    //let sale = "Sep 30, 2021 00:00:00",
        countDown = new Date(sale).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                headline = document.getElementById("headline");
                countdown = document.getElementById("countdown");
                countdown.style.display = "none";
                headline.style.display = "none";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());

function processData() {
   const fs = require('fs')
    fs.readFile('SaleInput.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
        return data;
    })
}
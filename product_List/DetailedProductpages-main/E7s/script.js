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
        fetch("/SaleInput.txt").then((r)=>{r.text().then((d)=>{let CONTENT = d})})
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
    var request = new XMLHttpRequest();
    request.open('GET', '/SaleInput.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}
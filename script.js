import header from "./base/header.js"
import footer from "./base/footer.js"

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;


const { animate } = Motion;

const navbar_logo = document.getElementById("navbar-logo");
const cards = document.querySelectorAll(".cards .card");

animate(navbar_logo, {
    translateX: [0, 20, 0],
},
    {
        duration: 1.5,
        repeat: Infinity
    }
);

const navbar_toggle = document.getElementById("navbar-toggle");
const navbar_mobile = document.getElementById("navbar-mobile");


navbar_toggle.addEventListener("click", () => {
    navbar_mobile.classList.toggle("hide");
})


fetch('./data/products.json')
    .then(response => response.json())
    .then(product => {
        var data= "";
        product.forEach(element => {
           data += `
        <div class="card">
            <div class="card-img">
                <img src=${element.image} alt="">
            </div>
            <div class="card-text">
                <p>${element.title}</p>
            </div>
        </div>
            `
            document.getElementById("cards").innerHTML = data;
        });
    })
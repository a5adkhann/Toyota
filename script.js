import header from "./base/header.js"
import footer from "./base/footer.js"

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;


const { animate } = Motion;

const navbar_logo = document.getElementById("navbar-logo");
const cards = document.querySelectorAll(".cards .card");

animate(navbar_logo, {
    translateX: [0, 10, 0],
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
        <div class="card" data-name="${element.data_name}">
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

// AOS code
    AOS.init();

const path = window.location.pathname;
if(path.includes("contact")){
    document.title = "Totota - Contact"
}
else if(path.includes("about")){
    document.title = "Totota - About"
}
else if(path.includes("services")){
    document.title = "Totota - Services"
}
else{
    document.title = "Totota - Home"
}


const filter_buttons = document.querySelectorAll(".filter-buttons-searchInput .filter-buttons button");

let filterProducts = (e) => {

    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    console.log("triggered")

const filterable_products = document.querySelectorAll(".cards .card");


    filterable_products.forEach(product => {
        product.classList.add("hideProduct");
        if(product.dataset.name == e.target.dataset.name || e.target.dataset.name == 'all'){
            product.classList.remove("hideProduct");
        }
    })
}

filter_buttons.forEach(button => button.addEventListener("click", filterProducts));



const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("searchFieldHide");
})
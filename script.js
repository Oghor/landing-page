const features = document.getElementById("features");
const company = document.getElementById("company");
const hamburgerBtn = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");
const featuresDropdown = document.querySelector("#features-dropdown");
const companyDropdown = document.querySelector("#company-dropdown");
const navMenu = document.querySelector(".menu");
const dropdownIcon= document.querySelector(".dropdown-icon");


const dropdownbtn = [
    {
        id:"hidden", 
        src: "./images/icon-arrow-down.svg",
        alt: "arrow down"
    },
    {
        id:"active",
        src: "./images/icon-arrow-up.svg",
        alt: "arrow up"
    }
]


function setArialExpandedFalse() {
    dropdown.forEach((btn) => {
        btn.setAttribute("arial-expanded", "false")
    })
}


function closeDropdownMenu() {
    setArialExpandedFalse()
    dropdown.forEach((btn) => {
        btn.classList.remove("active");
        btn.addEventListener("click", (e) =>  e.stopPropagation());
    })
    dropdownIcon.src = dropdownbtn[0].src;
    dropdownIcon.alt = dropdownbtn[0].alt;
}

function toggleHamburger() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburgerBtn.setAttribute(
      "aria-expanded",
      hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
}

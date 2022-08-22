// Code to open and close Modal
const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')


// Background Images
let els = document.getElementsByClassName("styled-button");


// Code to cycle through selected sections in the Live TV section
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");


// Modal Event Listeners
loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal()
    }
}

// Loop though the section tabs
for(let i=0;i<tabHeaderNodes.length;i++){
    tabHeaderNodes[i].addEventListener("click",function(){
      tabHeader.querySelector(".active").classList.remove("active");
      tabHeaderNodes[i].classList.add("active");
      tabBody.querySelector(".active").classList.remove("active");
      tabBodyNodes[i].classList.add("active");
  
      
      tabIndicator.style.left = `calc(calc(100% / 3) * ${i})`
    });
  
  }


// Loop through the possible backgrounds
for (var i = 0; i < els.length; i++) {
    // console.log(els[i].id);
    els[i].addEventListener("click", function (event) {
      changeBackground(this.id);
    });
  }


// Function to switch through backgrounds
function changeBackground(id) {
    // document.querySelectorAll('[id^="background"]');
    // var classes = console.log(document.querySelector("body").classList.length);
    // clear all background classes from body
    const cls = [
      "background-image-sports",
      "background-image-news",
      "background-image-events"
    ];
    document.querySelector(".live-tv").classList.remove(...cls);
  
    switch (id) {
      case "sports":
        document.querySelector(".live-tv").classList.add("background-image-sports");
        break;
      case "news":
        document
          .querySelector(".live-tv")
          .classList.add("background-image-news");
        break;
      case "events":
        document.querySelector(".live-tv").classList.add("background-image-events");
        break;
      default:
        console.log("switch caught nothing");
        break;
    }
  }
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

let backgroundImage = document.body.style.backgroundImage = "url('../img/live-sports.jpg')";
let backgroundRepeat = document.body.style.backgroundRepeat = "no-repeat"



for(let i=0;i<tabHeaderNodes.length;i++){
  tabHeaderNodes[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNodes[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyNodes[i].classList.add("active");

    
    tabIndicator.style.left = `calc(calc(100% / 3) * ${i})`
  });

}






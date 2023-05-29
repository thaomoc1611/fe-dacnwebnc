"use strict";

const WIDTH_SCROLL = 1210;

let box_slides = $('.owl-stage');
let next = $('.owl-next');
let prev = $('.owl-prev');

for(let i = 0; i < box_slides.length; i++) {
  let position = 4;
  let translateX = 0;
  let items = box_slides[i].children;
  next[i].addEventListener("click", function() {
    if(position >= 0 && position < items.length) {
      for(let j = 0; j < items.length; j++) {
        if(j < position || j >= position + 4) items[j].classList.remove("active");
        else items[j].classList.add("active");
      }
      position += 4;
      if(position < items.length) translateX -= WIDTH_SCROLL;
      Scroll(box_slides[i], translateX);
    }
  });

  prev[i].addEventListener("click", function() {
    if(position > 0) {
      for(let j = 0; j < items.length; j++) {
        if(j >= position - 4 && j < position) items[j].classList.add("active");
        else items[j].classList.remove("active");
      }
      position -= 4;
      if(position > 0) translateX += WIDTH_SCROLL;
      Scroll(box_slides[i], translateX);
    }
  });
}

function Scroll(slider, translateX) {
  slider.style.transform = "translate3d("+ translateX +"px, 0px, 0px)";
}

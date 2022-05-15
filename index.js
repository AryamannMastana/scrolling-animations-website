const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Displaying contents of element in bottom element upon hovering

// const element = document.querySelectorAll('scroll-element');
// const outside = document.getElementById('HoverOverInfo');

// function display(){
//     const value = this.dataset.columns;
//     outside.innerHTML =`You are hovering over element containing value ${value}`;
// } 

// function out(){
//     outside.innerHTML = "";
// } 

// for(i=0;i<img.length;i++){
//     element[i].addEventListener("mouseover", display, false);
//     element[i].addEventListener("mouseout", out, false);
// }


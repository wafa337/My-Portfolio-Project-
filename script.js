

const menuBtn = document.getElementById("menu-btn");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMenu() {
  mobileOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);

mobileClose.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
    scrollBtn.style.justifyContent = "center";
    scrollBtn.style.alignItems = "center";
  }
  
  else {
    scrollBtn.style.display = "none";
  }
  
});

scrollBtn.addEventListener("click", () => {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
});


const texts = [
  "=> Front End Developer <",
  "> Web Designer <",
  "=> React Developer <",
  "> UI/UX Enthusiast <"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  
  if (count === texts.length) {
    count = 0;
  }
  
  currentText = texts[count];
  
  letter = currentText.slice(0, ++index);
  
  document.getElementById("changing-text").textContent = letter;
  
  if (letter.length === currentText.length) {
    
    setTimeout(erase, 1200);
    
  } else {
    
    setTimeout(type, 100);
    
  }
  
}

function erase() {
  
  letter = currentText.slice(0, --index);
  
  document.getElementById("changing-text").textContent = letter;
  
  if (letter.length === 0) {
    
    count++;
    
    setTimeout(type, 300);
    
  } else {
    
    setTimeout(erase, 50);
    
  }
  
}

type();


const hiddenElements = document.querySelectorAll(
  ".hidden, .hidden-left, .hidden-right, .hidden-zoom"
);

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach((entry) => {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add("show");
      
    }
    
  });
  
}, {
  threshold: 0.15
});

hiddenElements.forEach((el) => observer.observe(el));

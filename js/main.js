const texts = [
  "Desarrolladora Web Full Stack",
  "Construyendo soluciones funcionales",
  "Aprendizaje continuo"
];

let currentText = 0;
let currentLetter = 0;
let deleting = false;

const typingElement = document.querySelector("#typing");
const navbar = document.querySelector(".custom-navbar");

function animateText() {
  const text = texts[currentText];

  if (!deleting) {
    currentLetter++;
    typingElement.textContent = text.slice(0, currentLetter);

    if (currentLetter === text.length) {
      deleting = true;
      setTimeout(animateText, 1700);
      return;
    }
  } else {
    currentLetter--;
    typingElement.textContent = text.slice(0, currentLetter);

    if (currentLetter === 0) {
      deleting = false;
      currentText = (currentText + 1) % texts.length;
    }
  }

  setTimeout(animateText, deleting ? 45 : 80);
}

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 50);
});

animateText();
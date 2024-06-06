document.addEventListener("DOMContentLoaded", function() {
  let header = document.querySelector("header");
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
  });

  menu.onclick = () => {
      navbar.classList.toggle("active");
  };
  window.onscroll = () => {
      navbar.classList.remove("active");
  };

  // Dark Mode / Light Mode
  let darkmode = document.querySelector("#darkmode");

  darkmode.onclick = () => {
      if (darkmode.classList.contains("bx-moon")) {
          darkmode.classList.replace("bx-moon", "bx-sun");
          document.body.classList.add("active");
      } else {
          darkmode.classList.replace("bx-sun", "bx-moon");
          document.body.classList.remove("active");
      }
  };

  // Typewriter Effect
  const text = "Aimen Labidi";
  const typewriterElement = document.getElementById("typewriter");
  let i = 0;
  const speed = 100; // The speed/duration of the effect in milliseconds

  function typeWriter() {
      if (i < text.length) {
          typewriterElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  typeWriter();
});

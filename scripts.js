function toggleHandHeldMenu()
{
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    let backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) { 
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("#dark-mode-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const container = document.querySelector(".container");
    
    function updateButtonText() {
        if (body.classList.contains("dark-mode")) {
          toggleButton.textContent = "Light Mode";
        } else {
          toggleButton.textContent = "Dark Mode";
        }
    }

    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      header.classList.add("dark-mode");
      nav.classList.add("dark-mode");
      container.classList.add("dark-mode");
      updateButtonText();
    }
  
    toggleButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      header.classList.toggle("dark-mode");
      nav.classList.toggle("dark-mode");
      container.classList.toggle("dark-mode");
  
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
      updateButtonText();
    });
  });
  
  


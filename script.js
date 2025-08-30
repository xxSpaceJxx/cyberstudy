document.addEventListener("DOMContentLoaded", function () {
  let current = window.location.pathname.split("/").pop();
  let links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.style.color = "#ffc107"; // highlight color
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Highlight current page in navbar
  let current = window.location.pathname.split("/").pop();
  let links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.style.color = "#ffc107"; // highlight current page
    }
  });

  // Toggle answers
  let buttons = document.querySelectorAll(".toggle-answer");
  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      let answer = this.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        this.textContent = "Hide Answer";
      } else {
        answer.style.display = "none";
        this.textContent = "Show Answer";
      }
    });
  });
});

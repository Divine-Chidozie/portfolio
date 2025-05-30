// Smooth scroll for navbar links
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll to the section
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the section at the top
    });
  });
});
window.onscroll = function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// AOS.init();
AOS.init({
  duration: 1200, // Animation duration
  easing: "ease-in-out", // Animation easing function
});

const user = {
  name: "Harley",
  age: 20,
  isVerified: true,
};
console.log(user);

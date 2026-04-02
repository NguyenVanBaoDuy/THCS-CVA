// Main.js - Interactivity for Chu Văn An School Website

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu on link click
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^=\"#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.boxShadow = "0 4px 30px var(--shadow)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 2px 20px var(--shadow)";
    }
  });

  // Fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  // Simple image carousel for features/campus
  initCarousel();

  // Contact form handling (demo)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast();
      contactForm.reset();
    });
  }
});

// Simple carousel function
function initCarousel() {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    // Auto advance every 5s
    setInterval(nextSlide, 5000);

    // Navigation dots if present
    const dots = carousel.parentElement.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = index;
        slides[currentSlide].classList.add("active");
      });
    });
  });
}

// Parallax effect for hero (simple)
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
function showToast() {
  const toast = document.getElementById("toast");
  const close = toast.querySelector(".toast-close");

  toast.classList.add("show");

  // tự ẩn sau 3s
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // click X để tắt
  close.onclick = () => {
    toast.classList.remove("show");
  };
}

function updateCountdown() {
  // Set target date to August 31, 2025
  const targetDate = new Date("2025-08-31T23:59:59").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  } else {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
  }
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth scrolling for navigation
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
const video = document.querySelector(".bgvideo");
video.volume = 0;

// Add hover effects to rule items
document.querySelectorAll(".rule-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const videoIcon = this.querySelector(".video-icon");
    if (videoIcon) {
      videoIcon.style.transform = "scale(1.1)";
    }
  });

  item.addEventListener("mouseleave", function () {
    const videoIcon = this.querySelector(".video-icon");
    if (videoIcon) {
      videoIcon.style.transform = "scale(1)";
    }
  });
});

// Simulate video progress
let progress = 3;
setInterval(() => {
  progress += 0.1;
  if (progress > 100) progress = 3;
  document.querySelector(".progress-bar").style.width = progress + "%";
}, 100);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

document.querySelectorAll(".prize-tier").forEach((tier) => {
  tier.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 10px 30px rgba(255,215,0,0.2)";
  });

  tier.addEventListener("mouseleave", function () {
    this.style.boxShadow = "none";
  });
});

// Animate sponsor logos
document
  .querySelectorAll(".sponsor-logo, .sponsor-logo-bottom")
  .forEach((logo) => {
    logo.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

// Smooth scrolling for navigation
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.querySelector(".bgvideo");
//   video.muted = true;
//   video.volume = 0;
// });

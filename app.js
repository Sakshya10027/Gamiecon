function updateCountdown() {
  const targetDate = new Date("2025-17-10T23:59:00+05:30").getTime();
  const now = Date.now();
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
    ["days", "hours", "minutes", "seconds"].forEach((id) => {
      document.getElementById(id).textContent = "00";
    });
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);

document
  .querySelectorAll('a[href="#home"], a[href="#rules"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

document.querySelectorAll(".rule-item").forEach((item) => {
  const videoIcon = item.querySelector(".video-icon");
  item.addEventListener("mouseenter", () => {
    if (videoIcon) videoIcon.style.transform = "scale(1.1)";
  });
  item.addEventListener("mouseleave", () => {
    if (videoIcon) videoIcon.style.transform = "scale(1)";
  });
});

let progress = 3;
setInterval(() => {
  progress += 0.1;
  if (progress > 100) progress = 3;
  const bar = document.querySelector(".progress-bar");
  if (bar) bar.style.width = progress + "%";
}, 100);

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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".faq-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
});

document.querySelectorAll(".faq-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.borderColor = "#ff6b35";
  });

  card.addEventListener("mouseleave", function () {
    this.style.borderColor = "#3a3a3a";
  });
});
function toggleMenu() {
  document.querySelector(".nav-container").classList.toggle("show");
}
function createGameThumbnail(canvasId, primaryColor, secondaryColor, title) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, primaryColor);
  gradient.addColorStop(1, secondaryColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.fillRect(20, 20, 100, 60);
  ctx.fillRect(280, 120, 80, 60);

  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.beginPath();
  ctx.arc(150, 100, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(320, 60, 30, 0, Math.PI * 2);
  ctx.fill();

  if (title) {
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(title, canvas.width / 2, canvas.height / 2);
  }
}

document.querySelectorAll("canvas").forEach((canvas) => {
  canvas.width = 350;
  canvas.height = 160;
});

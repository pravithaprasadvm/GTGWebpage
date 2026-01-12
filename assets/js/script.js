window.addEventListener("load", () => {
  const loader = document.getElementById("gtg-loader");
  loader.style.transition = "opacity .5s ease";
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 500);
});




const toggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeMenu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  mobileNav.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  toggle.classList.remove("active");
  mobileNav.classList.remove("open");
});



/* ===== GALLERY ===== */
const topImages = [
  "assets/images/perfume.png",
  "assets/images/perfume1.png",
  "assets/images/perfume2.png",
  "assets/images/perfume3.png"
];

const bottomImages = [
  "assets/images/perfume.png",
  "assets/images/perfume1.png",
  "assets/images/perfume2.png",
  "assets/images/perfume3.png"
];

const galleryImages = [...topImages, ...bottomImages];
let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const dots = document.getElementById("dots");
const thumbsTop = document.getElementById("thumbsTop");
const thumbsBottom = document.getElementById("thumbsBottom");

function renderThumbs(images, container, offset) {
  container.innerHTML = "";
  images.forEach((img, i) => {
    const index = offset + i;
    const t = document.createElement("div");
    t.className = "thumb" + (index === currentIndex ? " active" : "");
    t.innerHTML = `<img src="${img}">`;
    t.onclick = () => { currentIndex = index; renderGallery(); };
    container.appendChild(t);
  });
}

function renderGallery() {
  mainImage.src = galleryImages[currentIndex];
  dots.innerHTML = "";
  galleryImages.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot" + (i === currentIndex ? " active" : "");
    d.onclick = () => { currentIndex = i; renderGallery(); };
    dots.appendChild(d);
  });

  renderThumbs(topImages, thumbsTop, 0);
  renderThumbs(bottomImages, thumbsBottom, topImages.length);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  renderGallery();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  renderGallery();
}

renderGallery();

/* ===== COLLAPSIBLE SUBSCRIPTION ===== */
const purchaseRadios = document.querySelectorAll('input[name="purchase"]');
const singleBox = document.querySelector('.single-content');
const doubleBox = document.querySelector('.double-content');

purchaseRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === "single") {
      singleBox.classList.add("active");
      doubleBox.classList.remove("active");
    } else {
      doubleBox.classList.add("active");
      singleBox.classList.remove("active");
    }
  });
});




const headers = document.querySelectorAll(".acc-header");

// Ensure all are closed on load
document.querySelectorAll(".acc-item").forEach(item => {
  item.classList.remove("active");
  item.querySelector(".icon").textContent = "+";
});

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains("active");

    // Close all
    document.querySelectorAll(".acc-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add("active");
      header.querySelector(".icon").textContent = "−";
    }
  });
});




/* Minimal JS placeholder (ready for validation or API hook) */
document.querySelector(".newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Subscribed!");
});


/* ================= LOADER + PAGE REVEAL ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("gtg-loader");

  loader.style.opacity = "0";
  loader.style.transition = "opacity .5s ease";

  setTimeout(() => {
    loader.style.display = "none";
    document.body.classList.add("loaded");
  }, 500);
});

/* ================= SCROLL ANIMATION ================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".product-page, .collection, .stats-section, .compare-section, .footer, .card, .acc-item, .stat-item"
).forEach(el => observer.observe(el));



let lastScroll = 0;

window.addEventListener("scroll", () => {
  const trail = document.createElement("div");
  trail.className = "scent-trail";
  document.body.appendChild(trail);

  trail.style.top = `${window.scrollY + window.innerHeight / 2}px`;

  setTimeout(() => trail.remove(), 1200);
});

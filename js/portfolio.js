const portfolioData = [
    {
    img: "./assets/images/portfolio.png",
    title: "Company Website",
    desc: "Our official business website with modern UI."
  },
  {
    img: "./assets/images/uiux.png",
    title: "UI/UX Design",
    desc: "User-friendly interfaces and prototypes for web & mobile."
  },
  {
    img: "./assets/images/web.png",
    title: "Web Development",
    desc: "Responsive, scalable websites tailored to business needs."
  },
  {
    img: "./assets/images/app.png",
    title: "App Development",
    desc: "High-quality mobile applications for iOS & Android."
  }
];

// Reusable function
function createCard(item) {
  return `
    <div class="col-lg-4 col-md-6 col-12">
      <div class="card h-100 portfolio-card">
        <img src="${item.img}" class="portfolio-img" alt="${item.title}" />
        <div class="card-body text-center">
          <h5 class="fw-bold">${item.title}</h5>
          <p class="text-muted">${item.desc}</p>
        </div>
      </div>
    </div>
  `;
}

// If homepage → show only 3
const homeContainer = document.getElementById("portfolio-home");
if (homeContainer) {
  const firstThree = portfolioData.slice(0, 3);
  homeContainer.innerHTML = firstThree.map(createCard).join("");
}

// If portfolio page → show all
const allContainer = document.getElementById("portfolio-all");
if (allContainer) {
  allContainer.innerHTML = portfolioData.map(createCard).join("");
}

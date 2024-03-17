// ANIMATIONS
const sc = ScrollReveal({
  distance: "40px",
  duration: 2000,
  reset: false,
});

//HOME SECTION (LANDING PAGE)
sc.reveal(".profilepicture", { origin: "top" });
sc.reveal(".home-heading", { origin: "top" });

// ABOUT SECTION*
sc.reveal(".about-content-container-1-wrap", { delay: 50, origin: "top" });
sc.reveal(".about-content-container-2-wrap", { delay: 200, origin: "top" });
sc.reveal(".about-content-container-3-wrap", { delay: 350, origin: "top" });

// EXPERIENCE SECTION
sc.reveal(".experience-content-years-wrap", { delay: 50, origin: "left" });
sc.reveal(".experience-content-customers-wrap", { delay: 50, origin: "left" });
sc.reveal(".experience-content-projects-wrap", { delay: 50, origin: "right" });
sc.reveal(".experience-content-satisfaction-wrap", {
  delay: 50,
  origin: "right",
});

// PROJECT SECTION
sc.reveal(".image-delta", { delay: 50, origin: "left" });
sc.reveal(".image-gamma", { delay: 50, origin: "left" });
sc.reveal(".image-omega", { delay: 50, origin: "left" });
sc.reveal(".image-theta", { delay: 50, origin: "left" });

sc.reveal(".right-delta", { delay: 50, origin: "right" });
sc.reveal(".right-gamma", { delay: 50, origin: "right" });
sc.reveal(".right-omega", { delay: 50, origin: "right" });
sc.reveal(".right-theta", { delay: 50, origin: "right" });

//RESPONSIVE NAVIGATION
function openDrawerMenu() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

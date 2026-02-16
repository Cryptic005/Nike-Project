document.addEventListener("DOMContentLoaded", () => {

  // Add to cart button
  document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", () => {
      button.innerText = "Added ✔";
      button.style.background = "#2ecc71";
      button.style.color = "white";
      button.disabled = true;   // optional: prevent multiple clicks
    });
  });

  // Scroll to products section
  const shopBtn = document.getElementById("shopBtn");
  const products = document.querySelector(".products");

  if (shopBtn && products) {
    shopBtn.onclick = () => {
      window.scrollTo({
        top: products.offsetTop,
        behavior: "smooth"
      });
    };
  }

});
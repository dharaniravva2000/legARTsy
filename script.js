
let gallery = document.getElementById("gallery");

function purchaseArt(title) {
  alert(`You selected to buy "${title}". Our team will contact you shortly!`);
}

function addToCart(artName) {
  // Stub for adding to cart
}

function buyNow(artName) {
  alert(`Proceeding to purchase "${artName}".`);
  // location.href = "checkout.html";
}

function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("show");
}

// Load existing cart or initialize
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Query all product cards
let products = document.querySelectorAll(".details");

products.forEach((product) => {
  const btn = product.querySelector("button");

  btn.addEventListener("click", () => {
    const item = {
      heading: product.children[0].textContent.trim(),
      artist: product.children[1].textContent.trim(),
      description: product.children[2].textContent.trim(),
      price: parseFloat(
        product.children[3].textContent.trim().replace(/[^0-9.]/g, "")
      ),
      image: product.parentElement.querySelector("img")?.src || "",
      copiesAvailable: product.children[4].textContent.trim(),
      original: product.children[5].textContent.trim(),
    };

    const exists = cart.some((prod) => prod.heading === item.heading);

    if (!exists) {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to cart!");
    } else {
      alert("Item is already in the cart.");
    }
  });
});

// Render cart if cart container exists
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

if (container) {
  container.innerHTML = "";
  let total = 0;

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    if (cartTotal) cartTotal.textContent = "Total: £0.00";
  } else {
    cartItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.heading}" style="width: 100px; height: auto;" />
        <div>
          <h3>${item.heading}</h3>
          <p><strong>Artist:</strong> ${item.artist}</p>
          <p><strong>Description:</strong> ${item.description}</p>
          <p><strong>Price:</strong> £${item.price.toFixed(2)}</p>
        </div>
        <hr>
      `;
      container.appendChild(div);
      total += parseFloat(item.price) || 0;
    });

    if (cartTotal) {
      cartTotal.textContent = "Total: £" + total.toFixed(2);
    }
  }
}

function clearCart() {
  localStorage.removeItem("cart");
  window.location.reload();
}


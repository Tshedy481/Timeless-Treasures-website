document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  if (banner) {
    banner.addEventListener("click", () => {
      alert("🎁 Don't miss out on our Christmas deals!");
    });
  }
});

function addToCart(itemName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(itemName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-items");
  const emptyMessage = document.getElementById("empty-cart");

  if (cartList) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      emptyMessage.style.display = "block";
    } else {
      emptyMessage.style.display = "none";
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
  }
});
function clearCart() {
  localStorage.removeItem("cart");
  alert("Cart cleared!");
  location.reload();
}

function checkoutCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Thank you for your purchase!\nItems:\n" + cart.join("\n"));
  localStorage.removeItem("cart");
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");
  const historyList = document.getElementById("message-history");

  // Load previous messages
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach(msg => {
    const li = document.createElement("li");
    li.textContent = `${msg.name} (${msg.email}): ${msg.message}`;
    historyList.appendChild(li);
  });

  // Handle form submission
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;

      const newMessage = { name, email, message };
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));

      confirmation.style.display = "block";
      form.reset();

      const li = document.createElement("li");
      li.textContent = `${name} (${email}): ${message}`;
      historyList.appendChild(li);
    });
  }
});

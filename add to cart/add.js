

  const products = [
    { id: 1, name: "Joy Pure Aloe Light Moisturizing", price: 200, image: "https://f.media-amazon.com/images/I/31jrD82qyTL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 2, name: "Samsung Galaxy M05 (Mint Green, 4GB RAM", price: 320, image: "https://f.media-amazon.com/images/I/41sHDqy567L._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 3, name: "Portable Mini Cooler Rechargeable Air Conditioner", price: 280, image: "https://f.media-amazon.com/images/I/61sTL8xtw7L._SX679_.jpg" },
    { id: 4, name: "Safari Pentagon 3 Pc Set  Small, Medium & Large", price: 300, image: "https://f.media-amazon.com/images/I/61-SNkMcaqL._SX679_.jpg" },
    { id: 5, name: "Water Can Dispenser Pump ", price: 210, image: "https://f.media-amazon.com/images/I/414mpVnnjkL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 6, name: "Statue Set of 3 Modern Art Showpiece", price: 190, image: "https://f.media-amazon.com/images/I/51ks7SHj2YL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 7, name: "Philips HL7756/01 750 Watt Mixer Grinder, ", price: 230, image: "https://f.media-amazon.com/images/I/41oxuaGhVBL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 8, name: "Stainless Steel Swing Hammock Chair  & Accessory", price: 220, image: "https://f.media-amazon.com/images/I/41Rnu6D7yoL._SX300_SY300_QL70_FMwebp_.jpg" }
  ];

  let cart = [];

  function renderProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    products.forEach(product => {
      container.innerHTML += `
        <div class="col-md-3">
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h6 class="mt-2">${product.name}</h6>
            <p>$${product.price}</p>
            <button class="btn btn-dark btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      `;
    });
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const item = cart.find(p => p.id === productId);
    if (item) {
      item.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    renderCart();
  }

  function changeQty(productId, delta) {
    const item = cart.find(p => p.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== productId);
      }
    }
    renderCart();
  }

  function renderCart() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
      total += item.price * item.qty;
      count += item.qty;
      container.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" />
          <div class="flex-grow-1">
            <div>${item.name}</div>
            <small>$${item.price} × ${item.qty}</small>
          </div>
          <button class="btn-qty" onclick="changeQty(${item.id}, -1)">-</button>
          <button class="btn-qty" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      `;
    });

    document.getElementById("cart-total").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = count;
  }

  renderProducts();

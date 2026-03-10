/* ===============================
MYSTISCOOP STORE CART JS
Ultra Premium Version
=============================== */

/* Load cart from localStorage or initialize empty */
let cart = JSON.parse(localStorage.getItem("mystiScoopCart")) || [];

/* DOM Elements */
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");

/* ===============================
FUNCTION: Update Cart UI
=============================== */
function updateCartUI(){
cartItemsContainer.innerHTML = "";

let total = 0;
let count = 0;

cart.forEach((item, index) => {
total += item.price * item.qty;
count += item.qty;

```
const div = document.createElement("div");
div.className = "cart-item";
div.innerHTML = `
  <span>${item.name}</span>
  <div>
    <button onclick="decrease(${index})">−</button>
    <span>${item.qty}</span>
    <button onclick="increase(${index})">+</button>
  </div>
  <span>₹${item.price * item.qty}</span>
  <button onclick="removeItem(${index})">x</button>
`;
cartItemsContainer.appendChild(div);
```

});

cartTotalEl.innerText = total;
cartCountEl.innerText = count;

/* Save cart in localStorage */
localStorage.setItem("mystiScoopCart", JSON.stringify(cart));
}

/* ===============================
FUNCTION: Add To Cart
=============================== */
document.querySelectorAll(".add-cart").forEach(button => {
button.addEventListener("click", () => {
const card = button.closest(".card");
const name = card.dataset.name;
const price = parseInt(card.dataset.price);

```
const existingItem = cart.find(item => item.name === name);

if (existingItem) {
  existingItem.qty++;
} else {
  cart.push({name: name, price: price, qty: 1});
}

updateCartUI();
```

});
});

/* ===============================
FUNCTIONS: Increase / Decrease / Remove
=============================== */

function increase(index) {
cart[index].qty++;
updateCartUI();
}

function decrease(index) {
if(cart[index].qty > 1){
cart[index].qty--;
} else {
cart.splice(index,1);
}
updateCartUI();
}

function removeItem(index){
cart.splice(index,1);
updateCartUI();
}

/* ===============================
INITIAL LOAD
=============================== */
updateCartUI();

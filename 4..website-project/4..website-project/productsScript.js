const cart = [];

// Get all "افزودن به سبد" buttons and listen for clicks

const addToCartButtons = document.querySelectorAll(".addToCart");

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Button clicked!");

        const card = button.closest(".card");

        const productName = card.querySelector(".description").textContent;
        console.log(productName);

        const priceElement = card.querySelector(".price");

        let productPrice;

        if (priceElement.querySelector("del")) {
            productPrice = priceElement.querySelector("del").nextElementSibling.textContent;
        } else {
            productPrice = priceElement.textContent.replace("تومان", "").trim();
        }

        productPrice = Number(productPrice.replace(/[^0-9]/g, ""));

        addToCart(productName, productPrice);
    });
});

// The addToCart function

function addToCart(name, price) {
    const existingProduct = cart.find(function (item) {
        return item.name === name;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        const product = {
            name: name,
            price: price,
            quantity: 1
        };
        cart.push(product);
    }

    renderCart();
    updateCartTotal();
}

// Calculate the total price
function updateCartTotal() {
    const totalPrice = cart.reduce(function (total, item) {
        return total + (item.price * item.quantity);
    }, 0);


    cartTotalSpan.textContent = totalPrice.toLocaleString("fa-IR");


    const itemCount = cart.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);
    cartBadge.textContent = itemCount;
    cartBadge.style.display = itemCount > 0 ? "block" : "none";

    return totalPrice;
}


// cart panel — open / close

const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtn = document.getElementById("closeCart");
const cartBadge = document.getElementById("cartBadge");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalSpan = document.getElementById("cartTotalPrice");
const cartIcon = document.querySelector(".cartIcon");

function openCart() {
    cartPanel.classList.add("open");
    cartOverlay.classList.add("show");
}

function closeCart() {
    cartPanel.classList.remove("open");
    cartOverlay.classList.remove("show");
}

cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    openCart();
});

closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);



// render cart — turn the cart array into HTML rows

function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>سبد خرید شما خالی است 🛒</p>";
        return;
    }

    cart.forEach(function (item, index) {
        const row = document.createElement("div");
        row.className = "cartItem";
        row.innerHTML = `
            <span class="itemName">${item.name}</span>
            <div class="qtyControls">
                <button data-action="decrease" data-index="${index}">−</button>
                <span>${item.quantity}</span>
                <button data-action="increase" data-index="${index}">+</button>
            </div>
            <span>${(item.price * item.quantity).toLocaleString("fa-IR")}</span>
            <button class="removeItem" data-action="remove" data-index="${index}">✕</button>
        `;
        cartItemsContainer.appendChild(row);
    });
}


// CART BUTTONS (+, −, remove) 

cartItemsContainer.addEventListener("click", function (event) {
    const btn = event.target.closest("button");
    if (!btn) return;

    const index = Number(btn.dataset.index);
    const action = btn.dataset.action;

    if (action === "increase") {
        cart[index].quantity += 1;
    } else if (action === "decrease") {
        cart[index].quantity -= 1;
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
    } else if (action === "remove") {
        cart.splice(index, 1);
    }

    renderCart();
    updateCartTotal();
});

// hamburger

const hambergur = document.querySelector(".hambergur");
const listMenu = document.querySelector(".list-menu");

hambergur.addEventListener("click", function () {
    listMenu.classList.toggle("open");
    hambergur.classList.toggle("open");
});

//close after click
const categoryLinks = document.querySelectorAll(".list-menu a");

categoryLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        listMenu.classList.remove("open");
        hambergur.classList.remove("open");
    });
});
























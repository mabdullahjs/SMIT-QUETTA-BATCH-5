// console.log("cart page");

const getCartItems = JSON.parse(localStorage.getItem("cartItem"));
console.log(getCartItems);

const cartItemContainer = document.querySelector(".items");
const totalAmount = document.querySelector(".total-amount");

function renderItem() {
  cartItemContainer.innerHTML = "";
  getCartItems.map((item) => {
    cartItemContainer.innerHTML += `<div class="cart-item">
                <div class="item-info">${item.name}</div>
                <div class="item-price">$${item.price}</div>
                <div class="item-qty">
                    <div class="qty-box">
                        <button onclick="changeQuantity('less' , ${item.id})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('add' , ${item.id})">+</button>
                    </div>
                </div>
                <div class="item-total">$${item.quantity * item.price}</div>
            </div>`;
  });

  const getTotalAmount = getCartItems.reduce((acc, cval) => {
    return acc + cval.price * cval.quantity;
  }, 0);

  totalAmount.innerHTML = getTotalAmount;
}

renderItem();

function changeQuantity(quantity, id) {
  console.log(quantity);
  const index = getCartItems.findIndex((item) => item.id === id);
  console.log(index);

  if (quantity === "add") {
    getCartItems[index].quantity += 1;
  } else {
        if (getCartItems[index].quantity === 1) {
          getCartItems.splice(index, 1);
        } else {
          getCartItems[index].quantity -= 1;
        }
  }

  console.log(getCartItems);
  localStorage.setItem('cartItem' , JSON.stringify(getCartItems))
  renderItem();
}

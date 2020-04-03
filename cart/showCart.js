function showCart(cart) {
  if (cart.length === 0) {
    console.log("Your cart is empty!");
  } else {
    console.log("Your cart contains:");
    console.log("----------");
    for (let i = 0; i < cart.length; i = i + 1) {
      console.log("-", cart[i].name, "x", cart[i].quantity);
    }
    console.log("----------");
  }
}
module.exports = showCart;

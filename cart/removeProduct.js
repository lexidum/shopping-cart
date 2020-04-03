function removeProduct(cart, id) {
  const idx = cart.findIndex(x => x.id === id);
  if (cart[idx].quantity === 1) {
    cart.splice(idx, 1);
  } else {
    cart[idx].quantity -= 1;
  }
  return cart;
}
module.exports = removeProduct;

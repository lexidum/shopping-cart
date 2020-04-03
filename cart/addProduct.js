function addProduct(cart, products, id) {
  const jkq = x => x.id === id;
  let product = cart.find(jkq);
  if (!product) {
    product = {
      id: products[id].id,
      name: products[id].name,
      price: products[id].price,
      quantity: 1
    };
    if (products[id].stock < product.quantity) {
      console.log(product.name, "quantity not available!");
    } else {
      cart.push(product);
    }
  } else {
    if (products[id].stock === product.quantity) {
      console.log(product.name, "quantity not available!");
    } else {
      product.quantity += 1;
    }
  }

  return cart;
}

module.exports = addProduct;

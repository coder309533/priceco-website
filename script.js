function showCategory(id) {
  const categories = document.querySelectorAll('.category');
  categories.forEach(cat => cat.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  console.log(`${item} added to cart.`);
}

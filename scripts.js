// Change the main product image
function changeImage(imageUrl) {
  document.getElementById("main-image").src = imageUrl;
}

// Handle adding the product to the cart
function addToCart() {
  const productName = document.getElementById("product-name").textContent;
  const selectedVariant = document.getElementById("variant").value;
  const price = document.getElementById("product-price").textContent;

  alert(`Added to Cart:\nProduct: ${productName}\nVariant: ${selectedVariant}\nPrice: ${price}`);
}

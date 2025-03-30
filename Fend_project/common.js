function addToCart(p){
    console.log(p)
    const products = JSON.parse(localStorage.getItem('products'))?? []
    products.push(p);
    localStorage.setItem('products',JSON.stringify(products))
    updateCartCount();

}
function updateCartCount() {
    const products = JSON.parse(localStorage.getItem('products')) ?? [];
    document.getElementById('count').textContent = products.length;
}
document.addEventListener("DOMContentLoaded", updateCartCount);
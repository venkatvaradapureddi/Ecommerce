async function fetchData(url){

    try{
        const res = await fetch(url)
        if(res.ok){
            const data = await res.json()
            displayData(data)
            }
    }
    catch (err) {
        console.log(err)
    }
}
const mainDiv = document.getElementById("productsMain")
fetchData("https://fakestoreapi.com/products")
function displayData(data){
    mainDiv.textContent = '';
    data.forEach((p,i) => {
        console.log(p)
        const productDiv =document.createElement("div")
        productDiv.classList.add("card","p-3","d-flex","flex-column","justify-content-between","border","border-2","shadow-lg")
        const productImage = document.createElement("img")
		productImage.classList.add("card-img-top")
		productImage.height = 300
		productImage.src = p.image
		productImage.alt = p.title
		const productTitle = document.createElement("h2")
        productTitle.classList.add("card-title")
        const productLink = document.createElement('a');
        productLink.href = `./product.html?pid=${p.id}`
        productTitle.textContent = p.title
        productLink.appendChild(productTitle)
		const productPrice = document.createElement("p")
	    productPrice.classList.add("card-text")
		productPrice.textContent = "Price: ₹" + p.price
		const addCartButton = document.createElement("button")
		addCartButton.classList.add("btn", "btn-primary")
        addCartButton.textContent = "Add Cart"
        addCartButton.addEventListener('click',function(){
            addToCart(p)
        })
        productDiv.append(productImage,productPrice,productLink,addCartButton)
        mainDiv.appendChild(productDiv)
})
}
document.getElementById('cat').addEventListener('change', function (e){
    console.log(e.target.value)
    fetchData(`https://fakestoreapi.com/products/category/${e.target.value}`)
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
async function fetchData(){
    try{
        const res = await fetch('https://fakestoreapi.com/products')
        if(res.ok){
            const data = await res.json()
            const electronicsproducts = data.filter((p) => p.category=='electronics')
            displayData("electronicsData", electronicsproducts)
            const mensProducts = data.filter((v) => v.category == "men's clothing")
			displayData("mensData", mensProducts)
			const womensProducts = data.filter((v) => v.category == "women's clothing")
			displayData("womensData", womensProducts)
			const jewelleryProducts = data.filter((v) => v.category == "jewelery")
			displayData("jewelleryData", jewelleryProducts)
		}

        }
        catch(err){
            console.log(err)
        }
    }
fetchData()
function displayData(id,products){
    const mainDiv = document.getElementById(id)
    products.forEach((p,i) =>{
        const productDiv = document.createElement("div")
        productDiv.classList.add("product-card","col-md-4","d-flex","flex-column","justify-content-center","align-items-center","border","border-2","pb-2","shadow-lg")
        const productImage = document.createElement("img")
		productImage.classList.add("card-img-top")
        productImage.height = 200
        productImage.width = 100
        productImage.src = p.image
		productImage.alt = p.title
		const productTitle = document.createElement("h2")
		productTitle.classList.add("card-title")
		productTitle.textContent = p.title
		const productPrice = document.createElement("p")
		productPrice.classList.add("card-text")
        productPrice.textContent= "total price : "+ p.price
        const addCartButton = document.createElement("button")
		addCartButton.classList.add("btn", "btn-primary",)
		addCartButton.textContent = "Add Cart"
        addCartButton.addEventListener('click',function(){
            addToCart(p)
        })
        productDiv.append(productImage,productTitle,productPrice,addCartButton)
        mainDiv.appendChild(productDiv)
    })
}
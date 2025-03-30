const params = new URLSearchParams(window.location.search)
let pid = params.get('pid')
async function fetchData(url){
    try{
        let res = await fetch(url)
        if(res.ok){
            let data = await res.json()
            displayData(data)

        }
    }
    catch(err){
        console.log(err)
    }
    
}
fetchData(`https://fakestoreapi.com/products/${pid}`)
function displayData(data){
    const Leftdiv =document.getElementById('leftDiv')
    let image = document.createElement('img')
    image.classList.add('img-thumbnail')
    image.src = data.image
    Leftdiv.appendChild(image)
    const maindiv =document.getElementById('rightDiv')
    const title = document.createElement('h2');
    title.textContent = data.title;
    const price = document.createElement('p');
    price.textContent = "Price: ₹" + data.price;
    const desc = document.createElement('p');
    desc.textContent = data.description;
    const addCartButton = document.createElement('button');
    addCartButton.classList.add("btn","btn-primary")
    addCartButton.textContent = "add cart";
    addCartButton.addEventListener('click',() => addToCart(data))
    maindiv.append(title,price,desc,addCartButton)

}
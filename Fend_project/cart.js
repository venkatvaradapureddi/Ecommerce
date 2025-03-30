// Ensure cartitems is always an array
let cartitems = JSON.parse(localStorage.getItem('products')) ?? [];

const mainDiv = document.getElementById('mainDiv');

// Display the products
displayData(cartitems);

function displayData(data) {
    mainDiv.textContent = ''; // Clear previous items

    data.forEach((item, i) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add("d-flex", "justify-content-between", "border", "p-3", "mb-2");

        const image = document.createElement("img");
        image.src = item.image;
        image.height = 100;

        const title = document.createElement("h2");
        title.textContent = item.title;
        title.classList.add('text-white');

        const price = document.createElement("p");
        price.textContent = "Price: ₹" + item.price;

        const removeCartButton = document.createElement("button");
        removeCartButton.textContent = "❎";
        removeCartButton.classList.add("btn", "btn-danger", "ms-3");

        // ✅ Corrected function name
        removeCartButton.addEventListener('click', function () {
            removeFromCart(i); 
        });

        itemDiv.append(image, title, price, removeCartButton);
        mainDiv.appendChild(itemDiv);
    });

    findTotal(data);
}

// ✅ Renamed remove function to avoid conflicts
function removeFromCart(index) {
    cartitems.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(cartitems));
    displayData(cartitems);
    findTotal(cartitems);
}

// ✅ Ensure `total` is calculated correctly
function findTotal(arr) {   
    const t = arr.reduce((prev, cur) => prev + cur.price, 0);
    document.getElementById('total').textContent = "Total: ₹" + t;
}

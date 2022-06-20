console.log("Aneeq's Extension");

function pushData(data) {
    const productsCont = document.getElementById("products-cont");

    data.forEach(product => {
        const productHTML = `
            <div class="col-12 my-2">
                <div class="card m-auto" style="width: 18rem;">
                    <img
                        src="${product?.thumbnail}"
                        class="card-img-top"
                        alt="iPhone9"
                        loading="lazy"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${product?.title}</h5>
                        <p class="card-text">
                            ${product?.description} <br/>
                            <strong>Price: (${product?.price}$)</strong>
                        </p>
                    </div>
                </div>
            </div>
        `;
        productsCont.innerHTML += productHTML;
    });
}


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => pushData(json.products))



// {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//     "images": [
//         "https://dummyjson.com/image/i/products/1/1.jpg",
//         "https://dummyjson.com/image/i/products/1/2.jpg",
//         "https://dummyjson.com/image/i/products/1/3.jpg",
//         "https://dummyjson.com/image/i/products/1/4.jpg",
//         "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
//     ]
// }
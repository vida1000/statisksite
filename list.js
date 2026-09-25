const productURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product_list_container");

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showProducts(data);
    });
  });
}

function showProducts(products) {
  console.log("First product", products[0]);
  console.log("Number of products", products.length);
  listContainer.innerHTML = "";

  products.forEach((product) => {
    let soldOutClass = "";
    if (product.soldout) {
      soldOutClass = "soldout";
    }

    listContainer.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""}"> 
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Placeholder" />
                <h3>${product.productdisplayname}</h3>
                 <p>${product.brandname} - ${product.category}</p>
                 <div>
          <p>${product.price} kr</p>
        </div>
                <p><a href="produkt.html">Read More</a></p>
                  ${product.soldout ? '<p class="soldout_tag">Sold Out</p>' : ""} 
      </article>`;
  });
}

getData(productURL);

console.log("Hello test test test");

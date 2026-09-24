"use strict";
console.log("Hello, world");

const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const categoryList = document.querySelector(".category_list_container");
getData();

function getData() {
  fetch(productUrl).then((result) =>
    result.json().then((data) => showData(data)),
  );
}

function showData(data) {
  console.log("DATA", data);
  categoryList.innerHTML = "";
  let myInnerHTML = "";

  data.forEach((category) => {
    console.log("category", category);

    myInnerHTML += `<div class="category">
                <img src="img/accessoriess.webp" alt="Accessories">
                <a href="produktliste.html">
                    <h3>${category.category}</h3>
                </a>

            </div>
`;
  });

  categoryList.innerHTML = myInnerHTML;
}

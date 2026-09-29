const param = new URLSearchParams(window.location.search);
const selectedID = param.get("id");

console.log("SelectedID", selectedID);

const detailURL = `https://kea-alt-del.dk/t7/api/products/${selectedID}`;

console.log("detailURL", detailURL);

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showDetails(data);
    });
  });
}

const produktside = document.querySelector(".produktside");

console.log(produktside);

function showDetails(detail) {
  console.log("detail", detail);

  produktside.innerHTML += `
             <div class="produktimg">
            <img src="img/fitted_wide_cuff_shirt.webp"
                alt="Fitted wide cuff shirt">
        </div>


        <div class="produkt_info">
            <h1>${detail.productdisplayname}</h1>
            <h2>${detail.brandname}</h2>
            <p>${detail.id}</p>
            <p>${detail.description}</p>
            <p>${detail.basecolour}</p>
            <p>${detail.price}</p>


            <label for="size">Size</label>

            <select id="size">
                <option value="">Size</option>
                <option value="xs">xs</option>
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
            </select>

            <button>Buy now</button>
        </div>
`;

  document.querySelector(".produktimg img").src =
    `https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp`;
}

loadData(detailURL);

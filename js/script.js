var obj = {
  results: [{
    productID: "KL2432",
    productName: "Hugo Boss men's suit",
    productPrice: 2500,
    productPriceFormatted: "DKK 2.500,00",
    inStock: true,
    productImg: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
    href: "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
    swatches: [{
      swatchDefAttCode: "BLCK",
      swatchName: "Black",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
    }]
  }, {
    productID: "KL2432",
    productName: "Hugo Boss men's suit",
    productPrice: 2500,
    productPriceFormatted: "DKK 2.500,00",
    inStock: true,
    productImg: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
    href: "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
    swatches: [{
      swatchDefAttCode: "SADD",
      swatchName: "Distressed Saddle",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD_SW?$SLI_MiniSwatch$" }
    },
    {
      swatchDefAttCode: "Mahogany",
      swatchName: "Mahogany",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_MAHO_SW?$SLI_MiniSwatch$" }
    }]
  }]
};
var productContainer = document.getElementById("productContainer");
obj.results.forEach(function (product) {
  if (product.inStock) {
    var productCard = document.createElement("div");
    productCard.classList.add("col-lg-4", "product-card");
    productCard.setAttribute("role", "listitem"); 
    productCard.setAttribute("tabindex", "0");
    productCard.innerHTML = `
      <div class="card">
        <figure class="card-img-top-container">
          <img
            src="${product.productImg}"
            class="card-img-top"
            alt="${product.productName}"
            aria-label="This image is describing the ${product.productName} "
            aria-hidden="false">
        </figure>
        <div class="card-body">
          <h5 class="card-title">${product.productName}</h5>
          <p class="card-text mt-4">Price: ${product.productPriceFormatted}</p>
          <div class="d-flex flex-wrap mt-4">
            ${product.swatches.map(swatch => `
              <img
                src="${swatch.img.src}"
                class="swatch-img"
                alt="${swatch.swatchName} swatch"
                aria-label="Color ${swatch.swatchName}"
                data-color="${swatch.swatchDefAttCode}"
              >
            `).join("")}
          </div>
          <a href="${product.href}" class="btn btn-primary mt-5" aria-label="Buy ${product.productName} now">Buy Now</a>
        </div>
      </div>
    `;
    productContainer.appendChild(productCard);
  }
});

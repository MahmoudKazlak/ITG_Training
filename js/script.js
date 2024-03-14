var obj = {
  results: [{
    productID: "KL2432",
    productName: "Hugo Boss men's suit",
    productPrice: 2500,
    productPriceFormatted: "DKK 2.500,00",
    inStock: !0, productImg: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
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
    inStock: !0,
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
},
  productContainer = document.getElementById("productContainer");
obj.results.forEach(function (a) {
  if (a.inStock) {
    var t = document.createElement("div"); t.classList.add("col-lg-4", "product-card"), t.setAttribute("role", "listitem"), t.innerHTML = `
            <div class="card">
            <div class="flex-sm-row  d-sm-flex d-lg-block">
              <div class="col-lg-12 col-sm-6">
                <img src="${a.productImg}" class="card-img-top" alt="${a.productName}">
              </div>
              <div class="col-lg-12 col-sm-6">
                <div class="card-body">
                  <h5 class="card-title">${a.productName}</h5>
                  <p class="card-text mt-4">Price: ${a.productPriceFormatted}</p>
                  <div class="d-flex flex-wrap mt-4">
                    ${a.swatches.map(a => `<img src="${a.img.src}" class="swatch-img" alt="${a.swatchName}">`).join("")}
                  </div>
                  <a href="${a.href}" class="btn btn-primary mt-5" aria-label="Buy ${a.productName} now">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
            `, productContainer.appendChild(t)
  }
});

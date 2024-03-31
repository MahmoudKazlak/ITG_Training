var obj = {
  results: [{
    productID: "KL2432",
    productName: "Hugo Boss men's suit",
    productPrice: 2500,
    productPriceFormatted: "DKK 2.500,00",
    inStock: true,
    productImg: ["https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main", "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main"],
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
    },
    {
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
    }
    ]
  },

  ]
};
var productContainer = document.getElementById("productContainer");
$('.card').css('cursor', 'pointer');
obj.results.forEach(function (product, index) {
  if (product.inStock) {
    var productCard = document.createElement("div");
    productCard.classList.add("col-lg-4", "product-card");
    productCard.setAttribute("role", "listitem");
    productCard.setAttribute("tabindex", "0");
    productCard.setAttribute("id", "product-" + index); // Add an id to each product


    productCard.innerHTML = `
      <div class="card" onClick="onClick(${JSON.stringify(product)})">
      
        <figure class="card-img-top-container">
          <img
            src="${product.productImg}"
            class="card-img-top"
            alt="${product.productName} image"
            aria-label="This image is describing the ${product.productName}"
            tabindex="0">
        </figure>
        <div class="card-body">
          <h5 class="card-title" tabindex="0">${product.productName}</h5>
          <p class="card-text mt-4" tabindex="0">Price: ${product.productPriceFormatted}</p>
          <div class="d-flex flex-wrap mt-4">
            ${product.swatches.map(swatch => `
              <img
                src="${swatch.img.src}"
                class="swatch-img"
                alt="${swatch.swatchName} swatch"
                aria-label="Color ${swatch.swatchName}"
                data-color="${swatch.swatchDefAttCode}"
                tabindex="0">
            `).join("")}
          </div>
          <a href="${product.href}" class="btn btn-primary mt-5" aria-label="Buy ${product.productName} now button" tabindex="0">Buy Now</a>
        </div>
      </div>
    `;

    productContainer.appendChild(productCard);
    document.getElementById("product-" + index).addEventListener("click", function () {
      onClick(product);
    });
  }
});
function onClick(product) {
  var opened = window.open("");
  opened.document.write(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.productName}</title>
    <!-- Bootstrap 5.2 -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- jQuery UI CSS -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <!-- My CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/all.min.css">
    <style>
    /* Add your custom CSS here */
    .carousel-inner img {
      height: 350px; /* Adjust this value to change the carousel size */
      width: 300px;
      margin: auto;
    }
    
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
}
  </style>
</head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
        <a class="navbar-brand ms-5" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active ms-5">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Goods</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Category 1</a>
                        <a class="dropdown-item" href="#">Category 2</a>
                        <a class="dropdown-item" href="#">Category 3</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </form>
            <button class="btn btn-outline-success my-2 my-sm-0 ms-4" type="submit">Search</button>
            <ul class="navbar-nav ml-auto ms-5">
                <li class="nav-item">
                    <a class="nav-link ms-3" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ms-3" href="#"><i class="fas fa-heart"></i></a>
                </li>
                <li class="nav-item ms-3">
                    <a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i></a>
                </li>
                <li class="nav-item ms-3">
                    <a class="nav-link" href="#"><i class="fas fa-user"></i></a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  <div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          ${product.productImg.map((img, index) => `
            <li data-target="#carouselExampleIndicators" data-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></li>
          `).join("")}
        </ol>
        <div class="carousel-inner">
          ${product.productImg.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${img}" class="d-block w-100" alt="${product.productName}">
            </div>
          `).join("")}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-md-6">
      <h1>${product.productName}</h1>
      <p>Price: ${product.productPriceFormatted}</p>
      <p>Selected Swatch: ${product.swatches[0].swatchName}</p>
      <div>
        ${product.swatches.map(swatch => `
          <img src="${swatch.img.src}" alt="${swatch.swatchName}">
        `).join("")}
      </div>
      <button class="btn btn-primary mt-4">Add to Cart</button>
      <button class="btn btn-outline-primary mt-4"><i class="fas fa-heart"></i> Add to List</button>
      <h2>Product Details</h2>
      <!-- Add your product details here -->
      <h2>Free Shipping</h2>
      <!-- Add your free shipping details here -->
    </div>
  </div>
</div>
<footer class="footer mt-auto py-3 bg-light">
<div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
</div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.2.0/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  `);
}

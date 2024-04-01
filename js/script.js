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
    },
    {
      swatchDefAttCode: "SADD",
      swatchName: "Distressed Saddle",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD_SW?$SLI_MiniSwatch$" }
    },
    {
      swatchDefAttCode: "SADD",
      swatchName: "Distressed Saddle",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD_SW?$SLI_MiniSwatch$" }
    },
    {
      swatchDefAttCode: "SADD",
      swatchName: "Distressed Saddle",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD_SW?$SLI_MiniSwatch$" }
    },
    {
      swatchDefAttCode: "SADD",
      swatchName: "Distressed Saddle",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD_SW?$SLI_MiniSwatch$" }
    },
    {
      swatchDefAttCode: "SADD",
      swatchName: "Distressed Saddle",
      swatchAttrName: "color",
      img: { src: "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD_SW?$SLI_MiniSwatch$" }
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
    productCard.setAttribute("id", "product-" + index);


    productCard.innerHTML = `
      <div class="card" onClick="onClick(${JSON.stringify(product)})">
      
        <figure class="card-img-top-container">
          <img id="productImg"
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
    .carousel-inner img {
      height: 350px;
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
    .hide {
      display: none;
    }
    //==============
    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
  }
  .counter-button {
      background-color: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
  }
  .counter-value {
      font-size: 20px;
  }
    </style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
        <a class="navbar-brand ms-5" href="index.html" tabindex="0">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active ms-5">
                    <a class="nav-link" href="#" tabindex="0">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="0">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="0">Goods</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="0">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="0">Contact</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="0">
                        Categories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#" tabindex="0">Category 1</a>
                        <a class="dropdown-item" href="#" tabindex="0">Category 2</a>
                        <a class="dropdown-item" href="#" tabindex="0">Category 3</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" tabindex="0">
            </form>
            <button class="btn btn-outline-success my-2 my-sm-0 ms-4" type="submit" tabindex="0">Search</button>
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
          <li data-target="#carouselExampleIndicators" data-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} tabindex="0"></li>
        `).join("")}
      </ol>
      <div class="carousel-inner">
        ${product.productImg.map((img, index) => `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" alt="${product.productName}" tabindex="0">
          </div>
        `).join("")}
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" tabindex="0">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" tabindex="0">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  
      </div>
      <div class="col-md-6">
        <h1 tabindex="0">${product.productName}</h1>
        <p tabindex="0">Price: ${product.productPriceFormatted}</p>
        <p tabindex="0">Selected Swatch: <span id="selected-swatch">${product.swatches[0].swatchName}</span></p>
        <div class="swatches">
          ${product.swatches.slice(0, 5).map(swatch => `
            <img src="${swatch.img.src}" alt="${swatch.swatchName}" class="swatch" data-name="${swatch.swatchName}" tabindex="0">
          `).join("")}
          <button tabindex="0" class="btn btn-primary more" style="background-color: transparent; border: 1px solid black; padding: 0; width: fit-content;" tabindex="0">
          <span style="display: inline-block; padding: 5px;">More</span>
        </button>
        <button class="btn btn-primary hide" style="background-color: transparent; border: 1px solid black; padding: 0; width: fit-content;" tabindex="0">
        <span style="display: inline-block; padding: 5px;">Hide</span>
        </button>
          <div class="extra-swatches hide">
            ${product.swatches.slice(5).map(swatch => `
              <img src="${swatch.img.src}" alt="${swatch.swatchName}" class="swatch" data-name="${swatch.swatchName}" tabindex="0">
            `).join("")}
          </div>
        </div>
        <div class="d-flex align-items-center"> <!-- Added container -->
        <div class="counter me-3 mt-3 border-light">
          <button id="decrease" class="counter-button" tabindex="0">-</button>
          <span id="counter" class="counter-value" tabindex="0">0</span>
          <button id="increase" class="counter-button" tabindex="0">+</button>
        </div>
        <button class="btn btn-primary mt-4 me-3" tabindex="0">Add to Cart</button>
      </div>
      <button class="btn mt-4" tabindex="0"><i class="fas fa-heart"></i> Add to List</button>
        <div class="accordion accordion-flush w-75 mt-3" id="accordionFlushExample">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" tabindex="0">
                  PRODUCT DETAILS
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolore dolorum perspiciatis doloremque velit iusto iste delectus quae quibusdam dignissimos.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" tabindex="0">
                  FREE SHIPPING IN THE CONTIGUOUS US 
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolore dolorum perspiciatis doloremque velit iusto iste delectus quae quibusdam dignissimos.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" tabindex="0">
                  FREE SHIPPING WITHIN 30 DAYS
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolore dolorum perspiciatis doloremque velit iusto iste delectus quae quibusdam dignissimos.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" tabindex="0">
                  QUALITY CERTIFICAIONS
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolore dolorum perspiciatis doloremque velit iusto iste delectus quae quibusdam dignissimos.</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  <footer class="footer mt-auto py-3 bg-light">
  <div class="container">
      <span class="text-muted"></span>
  </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.2.0/js/bootstrap.bundle.min.js"></script>
  <script>
    const swatchImages = document.querySelectorAll('.swatch');
    swatchImages.forEach(image => {
      image.addEventListener('click', function() {
        const selectedSwatchName = this.getAttribute('data-name');
        document.querySelector('#selected-swatch').innerText = selectedSwatchName;
      });
    });
    const moreBtn = document.querySelector('.more');
    const hideBtn = document.querySelector('.hide');
    const extraSwatches = document.querySelector('.extra-swatches');

    moreBtn.addEventListener('click', function() {
      extraSwatches.classList.remove('hide');
      moreBtn.classList.add('hide');
      hideBtn.classList.remove('hide');
    });

    hideBtn.addEventListener('click', function() {
      extraSwatches.classList.add('hide');
      moreBtn.classList.remove('hide');
      hideBtn.classList.add('hide');
    });
    let count = 0;

    document.getElementById('increase').addEventListener('click', function() {
        count++;
        document.getElementById('counter').innerText = count;
    });
    
    document.getElementById('decrease').addEventListener('click', function() {
        if(count > 0) {
            count--;
            document.getElementById('counter').innerText = count;
        }
    });
  </script>
</body>
</html>
  `);
}
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
      <div class="container">
      <h2>Carousel Example</h2>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
    
          <div class="item active">
            <img src="la.jpg" alt="Los Angeles" style="width:100%;">
            <div class="carousel-caption">
              <h3>Los Angeles</h3>
              <p>LA is always so much fun!</p>
            </div>
          </div>
    
          <div class="item">
            <img src="chicago.jpg" alt="Chicago" style="width:100%;">
            <div class="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
        
          <div class="item">
            <img src="ny.jpg" alt="New York" style="width:100%;">
            <div class="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
      
        </div>
    
        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    
    </body>
      `;
  
      productContainer.appendChild(productCard);
    }
  });
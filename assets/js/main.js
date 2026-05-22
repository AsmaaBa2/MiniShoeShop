const products = [
  {
    id: 0,
    image: "./assets/img/p1.png",
    title: "VS Pace Mens Trainers",
    price: 120,
    discount: 50,
  },
  {
    id: 1,
    image: "./assets/img/p2.png",
    title: "Infernus V3",
    price: 100,
    discount: 0,
  },
  {
    id: 2,
    image: "./assets/img/p3.png",
    title: "Alpha All-Purpose Gen Z",
    price: 20,
    discount: 30,
  },
  {
    id: 3,
    image: "./assets/img/p4.png",
    title: "A11 Sky",
    price: 20,
    discount: 15,
  },
  {
    id: 4,
    image: "./assets/img/p5.png",
    title: "Urban Tracks ",
    price: 100,
    discount: 0,
  },
  {
    id: 5,
    image: "./assets/img/p6.png",
    title: "Court Vision",
    price: 20,
    discount: 0,
  },
  {
    id: 6,
    image: "./assets/img/p7.png",
    title: "Classic Core 99",
    price: 20,
    discount: 15,
  },
  {
    id: 7,
    image: "./assets/img/p8.png",
    title: "Quick Pace V2",
    price: 100,
    discount: 10,
  },
  {
    id: 8,
    image: "./assets/img/p9.png",
    title: "Air Max T6 Waterproof ",
    price: 20,
    discount: 0,
  },
  {
    id: 9,
    image: "./assets/img/p10.png",
    title: "High Breed F2",
    price: 20,
    discount: 40,
  },
];

let allProducts = document.getElementById("all-products");
let searchInput = document.getElementById("search");

function createProductBox(product) {
  let box = document.createElement("div");
  box.classList.add("box");

  if (product.discount > 0) {
    let discountElement = document.createElement("span");
    discountElement.classList.add("discount");
    discountElement.textContent = product.discount + "% OFF";
    box.appendChild(discountElement);
  }

  let imgBox = document.createElement("div");
  imgBox.classList.add("img-box");

  let imageElement = document.createElement("img");
  imageElement.classList.add("images");
  imageElement.src = product.image;
  imgBox.appendChild(imageElement);

  let bottom = document.createElement("div");
  bottom.classList.add("bottom");

  let titleElement = document.createElement("p");
  titleElement.textContent = product.title;

  let priceContainer = document.createElement("div");
  let finalPrice = product.price - (product.price * product.discount / 100);
  let priceElement = document.createElement("span");
  priceElement.textContent = finalPrice + "$";
  priceContainer.appendChild(priceElement);

  if (product.discount > 0) {
    let delElement = document.createElement("del");
    delElement.textContent = product.price + "$";
    priceContainer.appendChild(delElement);
  }

  let button = document.createElement("button");
  button.textContent = "Add to cart";

  bottom.appendChild(titleElement);
  bottom.appendChild(priceContainer);
  bottom.appendChild(button);

  box.appendChild(imgBox);
  box.appendChild(bottom);

  return box;
}

products.forEach(function(product) {
  if (product.id === 0) return;
  allProducts.appendChild(createProductBox(product));
});

searchInput.addEventListener("input", function() {
  let searchValue = searchInput.value.toLowerCase();
  let results = products.filter(function(product) {
    return product.title.toLowerCase().includes(searchValue);
  });

  allProducts.innerHTML = "";

  results.forEach(function(product) {
    if (product.id === 0) return;
    allProducts.appendChild(createProductBox(product));
  });
});
let cartBtn = document.getElementById("cartIcon");
let cartPopup = document.getElementById("cart");



cartBtn.addEventListener("click", function() {
  cartPopup.classList.toggle("active");

});


cart.addEventListener("click", function() {
  cartPopup.classList.remove("active");
});


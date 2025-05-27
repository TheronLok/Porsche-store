
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Porsche 911",
    price: 500000,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Panamera",
    price: 400000,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/jordan.png",
      },
      {
        code: "black",
        img: "./img/product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Porsche 718",
    price: 1090000,
    colors: [
      {
        code: "red",
        img: "./img/product/blazer.png",
      },
      {
        code: "lightgray",
        img: "./img/product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Macan",
    price: 12900000,
    colors: [
      {
        code: "cyan",
        img: "./img/product/crater.png",
      },
      {
        code: "green",
        img: "./img/product/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Taycan",
    price: 900000,
    colors: [
      {
        code: "gray",
        img: "./img/product/hippie.png",
      },
      {
        code: "red",
        img: "./img/product/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


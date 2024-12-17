// const cardsFunc = () => {
//   const container = document.querySelector(".col-md-8");

//   const cards = [
//     {
//       id: 0,
//       name: "Калифорния",
//       quantity: 6,
//       image: "california-hit.jpg",
//       price: 300,
//       weight: 180,
//     },
//     {
//       id: 1,
//       name: "Калифорния темпура",
//       quantity: 6,
//       image: "california-tempura.jpg",
//       price: 250,
//       weight: 205,
//     },
//     {
//       id: 2,
//       name: 'Запеченный ролл "Калифорния"',
//       quantity: 6,
//       image: "zapech-california.jpg",
//       price: 230,
//       weight: 182,
//     },
//     {
//       id: 3,
//       name: "Филадельфия",
//       quantity: 6,
//       image: "philadelphia.jpg",
//       price: 320,
//       weight: 230,
//     },
//   ];

//   const renderCards = (array) => {
//     container.innerHTML = "";

//     array.forEach((card) => {
//       container.insertAdjacentHTML(
//         "beforeend",
//         `<div class="col-md-6">
//               <div class="card mb-4">
//               <img
//                   class="product-img"
//                   src="img/roll/${card.image}"
//                   alt=""
//               />
//               <div class="card-body text-center">
//                   <h4 class="item-title">${card.name}</h4>
//                   <p><small class="text-muted">${card.quantity} шт.</small></p>

//                   <div class="details-wrapper">
//                   <div class="items">
//                       <div data-js-button-minus class="items__control">-</div>
//                       <div data-js-count class="items__current">1</div>
//                       <div data-js-button-plus class="items__control">+</div>
//                   </div>

//                   <div class="price">
//                       <div class="price__weight">${card.weight}г.</div>
//                       <div class="price__currency">${card.price} ₽</div>
//                   </div>
//                   </div>

//                   <button
//                   data-js-add-button
//                   type="button"
//                   class="btn btn-block btn-outline-warning"
//                   >
//                   + в корзину
//                   </button>
//               </div>
//               </div>
//           </div>`
//       );
//     });

//     addToCart();
//   };

//   renderCards(cards);
// };

// const addToCart = () => {
//   const buttonPlus = document.querySelector("[data-js-button-plus]");
//   const buttonMinus = document.querySelector("[data-js-button-minus]");
//   const currentDisplay = document.querySelector("[data-js-count]");
//   const cartWrapper = document.querySelector(".cart-wrapper");
//   const addButton = document.querySelector("[data-js-add-button]");
//   const emptyCart = document.querySelector("[data-js-empty-cart]");

//   let currentCount = 1;

//   currentDisplay.textContent = currentCount;

//   document.addEventListener("click", (event) => {
//     if (event.target == buttonMinus) {
//       if (currentCount > 1) {
//         currentCount--;
//         currentDisplay.textContent = currentCount;
//       }
//     }

//     if (event.target == buttonPlus) {
//       if (currentCount < 99) {
//         currentCount++;
//         currentDisplay.textContent = currentCount;
//       }
//     }

//     if (event.target == addButton) {
//       emptyCart.innerHTML = "";
//       cartWrapper.insertAdjacentHTML(
//         "afterbegin",
//         `<div class="cart-item">
//               <div class="cart-item__top">
//                   <div class="cart-item__img">
//                   <img src="img/roll/philadelphia.jpg" alt="" />
//                   </div>
//                   <div class="cart-item__desc">
//                   <div class="cart-item__title">Филадельфия хит ролл</div>
//                   <div class="cart-item__weight">6 шт. / 182г.</div>

//                   <div class="cart-item__details">
//                       <div class="items items--small">
//                       <div class="items__control">-</div>
//                       <div class="items__current">${currentCount}</div>
//                       <div class="items__control">+</div>
//                       </div>

//                       <div class="price">
//                       <div class="price__currency">230 ₽</div>
//                       </div>
//                   </div>
//                   </div>
//               </div>
//               </div>`
//       );
//     }
//   });
// };

// addToCart();

const cardsFunc = () => {
  const container = document.querySelector(".grid");

  const cards = [
    {
      id: 0,
      name: "Калифорния",
      quantity: 6,
      image: "california-hit.jpg",
      price: 300,
      weight: 180,
    },
    {
      id: 1,
      name: "Калифорния темпура",
      quantity: 6,
      image: "california-tempura.jpg",
      price: 250,
      weight: 205,
    },
    {
      id: 2,
      name: 'Запеченный ролл "Калифорния"',
      quantity: 6,
      image: "zapech-california.jpg",
      price: 230,
      weight: 182,
    },
    {
      id: 3,
      name: "Филадельфия",
      quantity: 6,
      image: "philadelphia.jpg",
      price: 320,
      weight: 230,
    },
  ];

  const renderCards = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="col-md-6">
                <div class="card mb-4">
                <img
                    class="product-img"
                    src="img/roll/${card.image}"
                    alt=""
                />
                <div class="card-body text-center">
                    <h4 class="item-title">${card.name}</h4>
                    <p><small class="text-muted">${card.quantity} шт.</small></p>
    
                    <div class="details-wrapper">
                    <div class="items">
                        <div data-js-button-minus class="items__control">-</div>
                        <div data-js-count class="items__current">1</div>
                        <div data-js-button-plus class="items__control">+</div>
                    </div>
    
                    <div class="price">
                        <div class="price__weight">${card.weight}г.</div>
                        <div class="price__currency">${card.price} ₽</div>
                    </div>
                    </div>
    
                    <button
                    data-js-add-button
                    type="button"
                    class="btn btn-block btn-outline-warning"
                    >
                    + в корзину
                    </button>
                </div>
                </div>
            </div>`
      );
    });

    addToCart();
  };

  renderCards(cards);
};

const addToCart = () => {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const emptyCart = document.querySelector("[data-js-empty-cart]");


};

cardsFunc();

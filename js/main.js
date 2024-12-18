const cards = [
  {
    id: 0,
    name: "Калифорния",
    image: "california-hit.jpg",
    price: 300,
    weight: 180,
  },
  {
    id: 1,
    name: "Калифорния темпура",
    image: "california-tempura.jpg",
    price: 250,
    weight: 205,
  },
  {
    id: 2,
    name: 'Запеченный ролл "Калифорния"',
    image: "zapech-california.jpg",
    price: 230,
    weight: 182,
  },
  {
    id: 3,
    name: "Филадельфия",
    image: "philadelphia.jpg",
    price: 320,
    weight: 230,
  },
];

const renderCards = (array) => {
  const container = document.querySelector(".sushi__list");
  container.innerHTML = "";

  array.forEach((card) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <li class="sushi__item">
        <div class="sushi__item-img">
          <img src="./img/roll/${card.image}" alt="" width="265" height="265" loading="lazy" />
        </div>
        <h2 class="sushi__item-title">${card.name}</h2>
        <div class="sushi__bottom">
          <div class="sushi__bottom-right-block">
            <span class="sushi__bottom-right-block-weight">${card.weight}г.</span>
            <span class="sushi__bottom-right-block-price">${card.price} ₽</span>
          </div>
        </div>
        <div class="sushi__bottom-button">
          <button data-js-add-button class="sushi__button">+ в корзину</button>
        </div>
      </li>`
    );

    // Привязываем обработчики событий к текущей карточке
    cardControls(container.lastElementChild, card);
  });
};

const cardControls = (cardElement, card) => {
  const addButton = cardElement.querySelector("[data-js-add-button]");

  addButton.addEventListener("click", () => {
    addToCart(card);
  });
};

const addToCart = (card) => {
  const cartEmpty = document.querySelector(".cart__list");

  const cartAlert = document.querySelector(".cart__alert");
  const addButton = document.querySelector(
    `[data-js-add-button][data-card-id="${card.id}"]`
  );

  let quantity = 1;

  if (cartAlert) cartAlert.remove();

  const existingCartItem = Array.from(cartEmpty.children).find((item) => {
    return item.querySelector(".cart__item-title").textContent === card.name;
  });

  if (existingCartItem) {
    addButton.disabled = true;
    return;
  } else {
    cartEmpty.insertAdjacentHTML(
      "afterbegin",
      `
      <li class="cart__item">
        <img class="cart__item-img" src="./img/roll/${card.image}" alt="" />
        <div class="cart__item-description">
          <h4 class="cart__item-title">${card.name}</h4>
          <span class="cart__item-weight">${quantity} шт. / ${
        card.weight * quantity
      }г.</span>
          <div class="cart__bottom">
            <div class="cart__bottom-counter">
              <button class="cart__bottom-counter-item" type="button" data-js-cart-button-minus>-</button>
              <div class="cart__bottom-counter-count" data-js-cart-count>${quantity}</div>
              <button class="cart__bottom-counter-item" type="button" data-js-cart-button-plus>+</button>
            </div>
            <span class="cart__bottom-right-block-price">${
              card.price * quantity
            } ₽</span>
          </div>
        </div>
      </li>`
    );

    // Привязываем обработчики событий к кнопкам в корзине
    cartControls(cartEmpty.firstElementChild, card);
    updateTotalPrice();
  }
};

const cartControls = (cartItemElement, card) => {
  const cartButtonPlus = cartItemElement.querySelector(
    "[data-js-cart-button-plus]"
  );
  const cartButtonMinus = cartItemElement.querySelector(
    "[data-js-cart-button-minus]"
  );
  const cartCounterDisplay = cartItemElement.querySelector(
    "[data-js-cart-count]"
  );

  showTotal();

  cartButtonMinus.addEventListener("click", () => {
    let countInCart = Number(cartCounterDisplay.textContent);

    if (countInCart > 0) {
      countInCart -= 1;
      cartCounterDisplay.textContent = countInCart;
      updateCartCharacters(
        cartItemElement,
        card.price,
        countInCart,
        card.weight,
        card.quantity
      );
    }

    if (countInCart === 0) {
      cartItemElement.remove();
    }

    if (document.querySelectorAll(".cart__item").length == 0) {
      hideTotal();
      showCartAlert();
    }
    updateTotalPrice();
  });

  cartButtonPlus.addEventListener("click", () => {
    let countInCart = Number(cartCounterDisplay.textContent);

    countInCart += 1;
    cartCounterDisplay.textContent = countInCart;

    updateCartCharacters(cartItemElement, card.price, countInCart, card.weight);
    updateTotalPrice();
  });
};

const updateCartCharacters = (
  cartItemElement,
  pricePerUnit,
  quantity,
  weight
) => {
  const cartPrice = cartItemElement.querySelector(
    ".cart__bottom-right-block-price"
  );
  const cartQuantity = cartItemElement.querySelector(".cart__item-weight");

  cartPrice.textContent = `${pricePerUnit * quantity} ₽`;
  cartQuantity.textContent = `${quantity} шт. / ${weight * quantity}г.`;
};

const updateCartItemCount = (card, currentCount) => {
  const cartItems = document.querySelectorAll(".cart__item");

  cartItems.forEach((cartItem) => {
    const cartTitle = cartItem.querySelector(".cart__item-title").textContent;

    if (cartTitle === card.name) {
      const cartCounterDisplay = cartItem.querySelector("[data-js-cart-count]");
      const cartPriceDisplay = cartItem.querySelector(
        ".cart__bottom-right-block-price"
      );

      cartCounterDisplay.textContent = currentCount;

      const pricePerUnit = card.price;
      cartPriceDisplay.textContent = `${pricePerUnit * currentCount} ₽`;
    }
  });
};

const showCartAlert = () => {
  const alertContainer = document.querySelector(".cart__body");
  if (!document.querySelector(".cart__alert")) {
    alertContainer.insertAdjacentHTML(
      "beforeend",
      `<p class="cart__alert">Корзина пуста</p>
       <ul class="cart__list"></ul>`
    );
  }
};

const showTotal = () => {
  const totalPriceDisplay = document.querySelector(".cart__total");
  if (totalPriceDisplay) {
    totalPriceDisplay.style.display = "block"; // Скрываем элемент с общей суммой
  }
};

const hideTotal = () => {
  const totalPriceDisplay = document.querySelector(".cart__total");
  if (totalPriceDisplay) {
    totalPriceDisplay.style.display = "none"; // Скрываем элемент с общей суммой
  }
};

const updateTotalPrice = () => {
  const cartItem = document.querySelectorAll(".cart__item");
  let totalPrice = 0;

  cartItem.forEach((item) => {
    const priceDisplay = item.querySelector(".cart__bottom-right-block-price");
    totalPrice += Number(priceDisplay.textContent.replace(" ₽", ""));

    const totalPriceDisplay = document.querySelector(
      ".cart__total-title--orange"
    );
    totalPriceDisplay.textContent = `${totalPrice} ₽`;
  });
};

renderCards(cards);

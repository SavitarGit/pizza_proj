// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
    // Проверяем что клик был совершен по кнопке "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {

        // Находим карточку с товаром, внутри котрой был совершен клик
        const card = event.target.closest('.card');

        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.pizza-block__image').getAttribute('src'),
            title: card.querySelector('.pizza-block__title').innerText,
            // itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            // weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.pizza-block__price').innerText,
            // counter: card.querySelector('[data-counter]').innerText,
        };

        // Проверять если ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        // Если товар есть в корзине
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
        } else {
            // Если товара нет в корзине

            // Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="price">
												<div class="pizza-block__price cart-block__price">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								
							</div>`;

            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        // Сбрасываем счетчик добавленного товара на "1"
        // card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();

    }
});

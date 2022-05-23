const cartWrapper =  document.querySelector('.cart-wrapper');


window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.pizza-block__image').getAttribute('src'),
            title: card.querySelector('.pizza-block__title').innerText,
            price: card.querySelector('.pizza-block__price').innerText,
        };

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);


        if (itemInCart) {
        } else {
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__details">
											<div class="price">
												<div class="pizza-block__price cart-block__price">${productInfo.price}</div>
											</div>
										</div>
									</div>
							</div>`;


            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        toggleCartStatus();

        calcCartPriceAndDelivery();

    }
});

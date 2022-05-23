function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.pizza-block__price');
    const totalPriceEl = document.querySelector('.total-price');
    const totalElements = document.querySelector('.total-elem');
    // Общая стоимость товаров
    let priceTotal = 0;
    let elemenTotal =0;

    // Обходим все блоки с ценами в корзине
    priceElements.forEach(function (item) {
        // Добавляем стоимость товара в общую стоимость (кол-во * цену)
        priceTotal += parseInt(item.innerText);
        elemenTotal = (cartWrapper.children.length)
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;
    totalElements.innerText = elemenTotal;
}
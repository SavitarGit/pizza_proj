function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.pizza-block__price');
    const totalPriceEl = document.querySelector('.total-price');
    const totalElements = document.querySelector('.total-elem');

    let priceTotal = 0;
    let elemenTotal =0;


    priceElements.forEach(function (item) {
        priceTotal += parseInt(item.innerText);
        elemenTotal = (cartWrapper.children.length)
    });


    totalPriceEl.innerText = priceTotal;
    totalElements.innerText = elemenTotal;
}
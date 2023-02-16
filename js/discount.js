document.getElementById('btn-apply').addEventListener('click',function(){
    const priceField = document.getElementById('price-field');
    const price = parseFloat(priceField.value);
    console.log(price);

    const originalPrice = document.getElementById('original-price');
    originalPrice.innerText = price;

    priceField.innerText = '';

    const discountPrice = price - (price * 0.3);
    console.log(discountPrice);

    const payment = document.getElementById('discount-price');
    payment.innerText = discountPrice;
})
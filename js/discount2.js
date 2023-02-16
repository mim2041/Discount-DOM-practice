document.getElementById('btn-apply').addEventListener('click',function(){
    const originalPrice = document.getElementById('original-price');
    const price = parseFloat(originalPrice.innerText);

    const couponField = document.getElementById('coupon-field');
    const couponId = couponField.value;

    const payment = document.getElementById('discount-price');

    if(couponId === 'DISC 30'){
        const discountPrice = price - (price * 0.3);
        console.log(discountPrice);
        payment.innerText = discountPrice;
    }
    else{
        payment.innerText = price;
    }
     couponField.value = '';
})
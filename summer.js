function discount() {
    const total = parseFloat(document.getElementById('card-price').innerText);
    const cupponInput = document.getElementById('cuppon-input');
    const cupponBtn = document.getElementById('cuppon-btn');

    if (total > 200) {
        cupponBtn.removeAttribute('disabled');

        cupponBtn.addEventListener('click', function () {
            const inputValue = cupponInput.value.trim();

            if (inputValue === 'SELL200') {
                const discount = total * 0.2;
                const cardTotalTK = document.getElementById('card-total-price');
                cardTotalTK.innerText = (total - discount).toFixed(2);
                const cardDiscount = document.getElementById('card-discount');
                cardDiscount.innerText = discount.toFixed(2);
            }
            cupponInput.value=' '
        });
    } else {
        cupponBtn.setAttribute('disabled', true);
    }
}

function finalTotal(total) {
    const purchasebtn = document.getElementById('purchase-btn');
    if (total == 0) {
        purchasebtn.setAttribute('disabled', true);
    } else {
        purchasebtn.removeAttribute('disabled');
    }
}

let total = 0;

function clickCard(target) {
    const cardName = target.querySelector('.card-title');
    const cardPriceElement = target.querySelector('.text-sm').textContent.split(' ')[0];
    const price = parseFloat(cardPriceElement);

    total += price;

    const productNameshow = document.getElementById('product-name-show');
    const productNameshowTag = document.createElement('p');
    const count = productNameshow.childElementCount;

    productNameshowTag.innerHTML = `${count + 1}. ${cardName.textContent}`;
    productNameshow.appendChild(productNameshowTag);

    document.getElementById('card-price').innerText = total.toFixed(2);
    document.getElementById('card-total-price').innerText = total.toFixed(2);

    finalTotal(total);
    discount();
}

document.getElementById('purchase-btn').addEventListener('click', function () {
    const cardTotalPrice = document.getElementById('card-total-price').innerText;
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});

document.getElementById('modal-go-home-btn').addEventListener('click', function () {
    const productNameshow = document.getElementById('product-name-show');
    productNameshow.innerHTML = '';
    total = 0;
    document.getElementById('card-price').innerText = '0.00';
    document.getElementById('card-discount').innerText = '0.00';
    document.getElementById('card-total-price').innerText = '0.00';
    const cupponBtn = document.getElementById('cuppon-btn');
    cupponBtn.setAttribute('disabled', true);
    const purchaseBtn = document.getElementById('purchase-btn');
    purchaseBtn.setAttribute('disabled', true);
    const modal = document.getElementById('my_modal_1');
    modal.close();
});

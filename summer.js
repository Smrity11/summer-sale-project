

function discount(){
    if(TotalPrice>200){
        const inputValue= document.getElementById('cuppon-input').value
        const cupponBtn =document.getElementById('cuppon-btn')
        cupponBtn.removeAttribute('disabled')
        
            cupponBtn.addEventListener('click',function(){
                if(inputValue=='SELL200'){
                const cardDiscount =document.getElementById('card-discount')
                
                const discount =TotalPrice-((TotalPrice*20)/100)
                const cardTotalTK =document.getElementById('card-total-price')
                cardTotalTK.innerText=discount
                cardDiscount.innerText=discount
                
                 }
                
            }) 
        }
    
    else{
        cupponBtn.setAttribute('disabled',true)
    }
}
 
function finalTotal(total){
   const purchasebtn =document.getElementById('purchase-btn')
    if(total==0){
        purchasebtn.setAttribute('disabled' , true)
    }
    else{
        purchasebtn.removeAttribute('disabled')
    }
   
}

let total =0
function clickCard(target){
    
    const cardName = target.childNodes[3].childNodes[3];
    
    const cardNmameText =cardName.innerText
    const productNmameshow = document.getElementById('product-name-show')
    const productNmameshowTag =document.createElement('p')
   const count = productNmameshow.childElementCount
   productNmameshowTag.innerHTML =`${count+1}. ${cardNmameText}`
   productNmameshow.appendChild(productNmameshowTag)

   const cardPriceElement = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
   const price = parseInt(cardPriceElement);
    total = total + price;
    TotalPrice= document.getElementById('card-price').innerText = total;

    const cardTotalTK =document.getElementById('card-total-price').innerText =total
   
    finalTotal(total)
    discount()
    
    
}

document.getElementById('purchase-btn').addEventListener('click', function () {
    const cardTotalPrice = document.getElementById('card-total-price').innerText;
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});


document.getElementById('modal-go-home-btn').addEventListener('click', function () {
    
    document.getElementById('product-name-show').innerHTML = '';

    total = 0;
    document.getElementById('card-price').innerText = total;
    document.getElementById('card-discount').innerText = total;
    document.getElementById('card-total-price').innerText = total;

    const cupponBtn =document.getElementById('cuppon-btn')
    cupponBtn.setAttribute('disabled', true);
    const purchaseBtn = document.getElementById('purchase-btn');
    purchaseBtn.setAttribute('disabled', true);

    const modal = document.getElementById('my_modal_1');
    modal.close();
});


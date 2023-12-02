let totalPriceValue = 0

function addToCart(element) {
    const item = element.closest('.item')
    let input = item.querySelector('input').value
    let price = item.querySelector('h2').innerText.substring(1)
    let name = item.querySelector('h3').innerText
    let inCart = document.querySelector('.inCart')
    
    let totalPrice = inCart.querySelector('h1')
    let image = item.querySelector('img')

    if (input === '') 
    {
        alert('Input quantity')

    } else if(input < 1) {
        alert('Quantity can not be less than 1')
        
    } else {
        
        inCart.innerHTML += `<div class="inCartItem">
            <img src="./assets/pictures/${name}.png" alt="">
            <h3><span id="nameSpan"> ${name}</span> $<span id="firstSpan">${price}</span> x <span id="secondSpan">${input}</span></h3> 
            <button onclick="removeFromCart(this)">Remove</button>
        </div>
        `

        totalPriceValue += parseInt(price) * input
        
        inCart.querySelector('h1').innerText = `Total price: $${totalPriceValue}`;
        
    } 
    
}

function removeFromCart(remover) {
    let inCartItem = remover.closest('.inCart .inCartItem')
    let price = inCartItem.querySelector('.inCart .inCartItem #firstSpan').innerText
    let inCart = document.querySelector('.inCart')
    let quantity = inCartItem.querySelector('.inCart .inCartItem #secondSpan').innerText
    let elements = document.querySelectorAll('.items .item')
    let itemHeading = document.querySelectorAll('.items .item .namePrice h3')
    let name = inCartItem.querySelector('.inCart .inCartItem #nameSpan')
    
    inCartItem.remove()

    totalPriceValue -= price * quantity
    inCart.querySelector('h1').innerText = `Total price: $${totalPriceValue}`;

}


const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 75,
        amount: 0,
        img: 'images/product2.jpg',
        get Sum() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 400,
        amount: 0,
        img: 'images/product1.jpg',
        get Sum() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 700,
        amount: 0,
        img: 'images/product3.jpg',
        get Sum() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    }
}
const btns = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        actions(this);
    })
}
function actions(btn) {
    const parent = btn.closest('.main__product')
    const num = parent.querySelector('.main__product-num')
    const parentId = parent.getAttribute('id')
    const sym = btn.getAttribute('data-symbol')
    const price = parent.querySelector('.main__product-price span')
    const kcall = parent.querySelector('.main__product-kcall span')

    if (sym == '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    } else if (sym == '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    num.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].Sum
    kcall.innerHTML = products[parentId].Kcall
}
const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')
addCart.addEventListener('click', function () {
    receipt.style.display = 'flex'
    setTimeout(function () {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '10%'
    }, 0)
    let menu = ''
    let totalPrice = 0
    let totalKcall = 0
    for (let key in products) {
        if (products[key].amount > 0) {
            menu += `${products[key].name} ${products[key].amount}X\n`
            totalPrice += products[key].Sum
            totalKcall += products[key].kcall
        }
    }
    receiptWindowOut.innerHTML = `Purchased:\n\n${menu}\n Total price: ${totalPrice} sum\n Total kcall: ${totalKcall} calories`
})
const headerTimerExtra=document.querySelector('.header__timer-extra')
let speed=30
function extra() {
    headerTimerExtra.innerHTML++
    if (headerTimerExtra.innerHTML==50){
        speed*=2
    }else if(headerTimerExtra.innerHTML==75){
        speed*=2 }
     if(headerTimerExtra.innerHTML<100){
          setTimeout(function() {
        extra()
     }, speed);    
     }  
    }
extra()
const peceiptWindowBtn = document.querySelector('.receipt__window-btn')
peceiptWindowBtn.addEventListener('click', function () {
    console.log(location.reload());
})
const mainProductInfo = document.querySelectorAll('.main__product-info')
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')
const viewImg = view.querySelector('img')
for (let i = 0; i < mainProductInfo.length; i++) {
 mainProductInfo[i].addEventListener('dblclick', function () {
     const parent = mainProductInfo[i].closest('.main__product')
     const parentId = parent.getAttribute('id')
    view.classList.add('active')
    viewImg.setAttribute('src', products[parentId].img)
})   
}
viewClose.addEventListener('click', function(){
    view.classList.remove('active')
})

//===========================Go home=====================>>
function gotoHome(){
    window.location = 'index.html'
    localStorage.setItem('cartItems',JSON.stringify(CartItems))
}



//==================================Data Calling=============================>>
let items = localStorage.getItem('cartItems')
let data = JSON.parse(items)
console.log(data);
//===================================getting elements html====================>>
let div = document.querySelector('#check-div');
let total = document.querySelector(".total")
// let quantity = 0
//=========================End========================>>
function renderItems(){
    div.innerHTML = ''
    let totalAmount = 0;
    data.map(function(items , index){
        totalAmount += items.price * items.quantity
       
        div.innerHTML += `
        <div class="rounded border-2 border-solid border-[#293548] mt-6 p-3 w-[280px] h-[50%]">
        <div class="img p-2">
            <img class="w-[200px] h-[200px]"  src=" ${items.image} " alt="">
    </div>
       <div class="text bg-[#0d2136] rounded  mt-4 p-2  ">
        <h3 class="text-2xl font-bold text-[#8AB4f8]"> Brand : ${items.brand}</h3>
        <h3 class="text-xl"> Model : ${items.model} </h3>
        <h3 class="text-xl" > ram : ${items.ram} </h3>
        <h3 class="text-xl" > camera : ${items.camera}  </h3>
        <h3 class="text-xl" >price : ${items.price}  </h3>
        <button onclick="decrease(${index})" class=" border-2 text-center border-solid border-[#d7dde6] rounded-lg mt-2 px-2 py-1 h-9 bg-[#0d2136] text-[#DADCE0] hover:bg-[#36373a]"> - </button>
        <span  class="text-center"  id="quantity" >${items.quantity}</span>
        <button onclick="increase(${index})" class=" border-2 border-solid border-[#d7dde6] rounded-lg mt-2 px-2 py-1 h-9 bg-[#0d2136] text-[#DADCE0] text-center hover:bg-[#36373a]  ">+</button> <br>
        <button onclick="deleteItem(${index})" class=" border-2 border-solid border-[#d7dde6] rounded-lg mt-7 px-2 py-1 h-9 bg-[#0d2136] text-[#DADCE0] text-center hover:bg-[#16375a]  ">Delete</button>
    </div>
    </div>`
    })
    total.innerHTML = totalAmount
}
renderItems() //initially call 
//============================= increase and decrease==================>>
let quantity = document.querySelector('#quantity');
// let btn = document.querySelector('#btn-dis')
function decrease(index){
    div.innerHTML = ''
    if(data[index].quantity === 0){
          data.splice(index,1)

    }else{
    data[index].quantity -= 1
}
localStorage.setItem('cartItems',JSON.stringify(data))
renderItems()
}
function increase(index){
    div.innerHTML = ''
   data[index].quantity += 1;
   localStorage.setItem('cartItems',JSON.stringify(data))
    renderItems()
}
//===========================Delete Work========================>>
function deleteItem(index){
    div.innerHTML = ''
    data.splice(index,1)
    renderItems()
}



function back(){
    window.location = 'index.html'
    localStorage.setItem('cartItems',JSON.stringify(data))

}
//==================loading problem=======================>>
window.onbeforeunload = function() {
    localStorage.setItem('cartItems' , JSON.stringify(data));
};  





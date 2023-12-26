//========================Main Object=========================>>

const phones = [
    {   
        image : 'https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s20/galaxy-s20-cosmic-gray.jpg',
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {   
        image : 'https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg',
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 29000
    },
    {   
        image : 'https://www.okmobile.com.pk/wp-content/uploads/2023/01/Untitled-design-2-1.png ',
        brand: 'Infinix',
        model: 'Z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 65000
    },
    {   
        image : 'https://cdn.homeshopping.pk/product_images/g/478/10pro-su__69720_zoom.png',
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 75000
    },
    {   
        image : 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Purple_phonewall?$ProductBase$&fmt=webp',
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 19000
    },
    {   
        image : 'https://assorted.downloads.oppo.com/static/assets/images/products/f11pro/m/sec1-959ba38195a4fe8d4301b9b0a33728da06e0b063.jpg',
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 17000
    },
    {   
        image : 'https://whatsmobiles.net/wp-content/uploads/2023/02/vivo-y20-whatsmobiles.net_.jpeg',
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {   
        image : 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-silver.jpg',
        brand: 'iphone',
        model: '11 pro',
        ram: 16,
        rom: 1024,
        camera: '60 megapixel',
        price: 95000
    },
    {   
        image : 'https://i0.wp.com/mobileguru.pk/wp-content/uploads/2022/08/OnePlus-8-pakistan-mobileguru.png?fit=1040%2C1040&ssl=1',
        brand: 'One Plus',
        model: '8 pro',
        ram: 8,
        rom: 1024,
        camera: '60 megapixel',
        price: 100000
    },
    {   
        image : 'https://images.priceoye.pk/tecno-spark-8-pro-pakistan-priceoye-k9rc5-500x500.webp',
        brand: 'Tecno',
        model: 'Spark 8 pro',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 35000
    },
    {   
        image : 'https://getemi.pk/wp-content/uploads/2023/03/redmi-10c-blue.jpg',
        brand: 'Redmi',
        model: '10C',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 89000
    },
    {   
        image : 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51bCBfSoJyL.jpg',
        brand: 'Motorola',
        model: 'G60',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 56000
    }

]
//==================================End========================>>
//===========================Getting element from HTML=====================>>
const div = document.querySelector('#div');

//=================================End======================>>
phones.map((items,index)=>{
    div.innerHTML+=`
    <div class="rounded border-2 border-solid border-[#293548] mt-6 p-5 w-[400px]">
    <div class="img p-2">
    <img src="${items.image}" alt="">
</div>
   <div class="text bg-[#0d2136] rounded  mt-4 p-5  ">
    <h3 class="text-2xl font-bold text-[#8AB4f8]"> Brand : ${items.brand}</h3>
    <h3 class="text-xl"> Model : ${items.model} </h3>
    <h3 class="text-xl" > ram : ${items.ram} </h3>
    <h3 class="text-xl" > camera : ${items.camera} </h3>
    <h3 class="text-xl" >price : ${items.price} </h3>
    <button onclick="addtoCart(${index})" class=" text-[#202124]  bg-[#7cacf8] hover:bg-[#89b0ef] rounded px-3 text-center py-1 mt-3" >Add to Cart</button>
</div>
</div>` 

})
//================================Add To cart============================>>
function addtoCart(index){
    if(CartItems.indexOf(phones[index]) !== -1){
        let indexNumber = CartItems.indexOf(phones[index])
        CartItems[indexNumber].quantity += 1
        console.log(CartItems);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Quantity Increase",
            showConfirmButton: false,
            timer: 1500
          });
    }else{
        phones[index].quantity = 1;
        CartItems.push(phones[index])
        console.log(CartItems);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Item Has Been Added to the Cart",
            showConfirmButton: false,
            timer: 1500
          });
    }

}
//==============================Checkout work======================>>
 function checkOut(){
    localStorage.setItem('cartItems',JSON.stringify(CartItems))
    window.location = 'checkout.html'
}

//==============Data from local storage===================>>
let datafromlocalstorage = JSON.parse(localStorage.getItem('cartItems'))
console.log(datafromlocalstorage);
let CartItems = [...datafromlocalstorage]
//======================End================>>

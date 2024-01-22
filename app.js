let footWear = [
  {
    name: "Sneakers",
    price: 5000,
    count: 5,
  },

  {
    name: "canvas",
    price: 4000,
    count: 7,
  },

  {
    name: "loafers",
    price: 8000,
    count: 9,
  },
];

function listFootwear(){
    footWear.forEach((footwear, index) => {
        console.log(`${index+1}. ${footwear.name} ----- ${footwear.price}`)
    })
}

function calPrice(){
    const totalPrice = footWear.map(item => ({
        name : item.name,
        totalPrice : item.price * item.count
    }) )
    console.log(totalPrice)
}


function buyProduct(index){
    let footwear = footWear[index];


    if(footwear){
        console.log(`you successfully purchased ${footwear.name} at the price of ${footwear.price}`)
    }else{ 
    console.log("Invalid product")
 }
}

listFootwear()
calPrice()
buyProduct(1)

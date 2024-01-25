let Clothes = [
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

function listClothes(){
    Clothes.forEach((clothes, index) => {
        console.log(`${index+1}. ${clothes.name} ----- ${clothes.price}`)
    })
}

function calPrice(){
    const totalPrice = Clothes.map(item => ({
        name : item.name,
        totalPrice : item.price * item.count
    }) )
    console.log(totalPrice)
}


function buyProduct(index){
    let clothes = Clothes[index];


    if(clothes){
        console.log(`you successfully purchased ${clothes.name} at the price of ${clothes.price}`)
    }else{ 
    console.log("Invalid product")
 }
}

listClothes()
calPrice()
buyProduct(2)

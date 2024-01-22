let shoes = [{

    name: "sneakers",
    price: 5000,
    count: 8
},

{
    name: "canvas",
    price: 7000,
    count: 9
},

{
    name: "loafers",
    price: 8500.50,
    count: 6
}]


function listShoe(){
    shoes.forEach((shoes, index) => {
        console.log(`${index+1}. ${shoes.name}  --- ${shoes.price}`)
    })
}

function calValue(){ 
const totalProductvalue= shoes.map(item => ({
    name: item.name,
    totalValue : item.price * item.count
}))

console.log(totalProductvalue)
}


//Total cost of each shoes summed together
const totalPriceOfShoes = shoes.reduce((accumulator, item) => accumulator + item.price *item.count)


console.log(totalPriceOfShoes)



listShoe()
calValue()



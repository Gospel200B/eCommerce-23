const { stdin } = require("process");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userName, userChoice;

let product = [
  {
    name: "Sneakers",
    price: 4000,
    count: 70,
  },

  {
    name: "Canvas",
    Price: 4000,
    count: 50,
  },
];

rl.question("Hello, what's your name? ", (name) => {
  userName = name;
  console.log(
    `Welcome ${userName}, please kindly choose from the list of products: `
  );
  displayShelve();
});

function displayShelve() {
  console.log("Shelve:");
  console.log(`1. ${product[0].name}.`);
  console.log(`2. ${product[1].name}.`);
  console.log(`3. Exit`);
  rl.question(`Which would you choose from the shelve? `, (choice) => {
    processOrder(choice);
    userChoice = choice;
  });
}

function processOrder(choice) {
  switch (choice) {
    case "1":
      userChoice = product[0].name;
      console.log(`you have selected ${product[0].name}.`);
      console.log(`The price of ${product[0].name} is ${product[0].price}.`);
      console.log(
        `The quantity of the ${product[0].name} is ${product[0].count}.`
      );
      rl.question(
        `Please enter the quantity of ${product[0].name} you want to purchase: `,
        (quantity) => {
          if (quantity > product[0].count) {
            console.log(
              `${product[0].name} is just ${product[0].count} in number.`
            );
            displayShelve();
          } else {
            product[0].count -= quantity;

            console.log(
              `you have selected ${quantity} ${
                product[0].name
              } at the price of ${product[0].price * quantity}.`
            );
            console.log(
              `${product[0].name} is remaining just ${product[0].count}.`
            );
            rl.question(
              `you selected your ${userChoice}, please select your shipping address: `,
              (address) => {
                userAddress = address;
                confirmOrder();
              }
            );
          }
        }
      );
      break;

    case "2":
      userChoice = product[1].name;
      console.log(`you have selected ${product[1].name}.`);
      console.log(`The price of ${product[1].name} is ${product[1].price}.`);
      console.log(
        `The quantity of the ${product[1].name} is ${product[1].count}.`
      );
      rl.question(
        `Please enter the quantity of ${product[1].name} you want to purchase: `,
        (quantity) => {
          if (quantity > product[1].count) {
            console.log(
              `${product[1].name} is just ${product[1].count} in number.`
            );
            displayShelve();
          } else {
            product[1].count -= quantity;
            console.log(
              `you have slected ${quantity} ${
                product[1].name
              } at the price of ${product[1].price * quantity}.`
            );
            console.log(
              `${product[1].name} is remaining just ${product[1].count}.`
            );
            rl.question(
              `you selected your ${userChoice}, please select your shipping address: `,
              (address) => {
                userAddress = address;
                confirmOrder();
              }
            );
          }
        }
      );
      break;
    default:
      console.log(
        `We're sorry, but we don't have your choice at the moment, please choose from the shelve`
      );
      displayShelve();
      return;
  }
}

function confirmOrder() {
  console.log(`Order summary for ${userName}`);
  console.log(`Item: ${userChoice}`);
  console.log(`Shipping Address: ${userAddress}`);

  console.log(`Thanks for Patronising us 😎`);

  rl.close();
}

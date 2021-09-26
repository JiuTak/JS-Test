/*============================================================================
                        Programming Basics
============================================================================*/

let numbersArr = [];

for (let index = 1; index < 101; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log(`Jackpot!`);
  }
  if (index % 3 === 0) {
    console.log(`This is divisible by 3`);
  } else if (index % 5 === 0) {
    console.log(`This is divisible by 5`);
  } else console.log(index);
  numbersArr.push(index);
}

/*============================================================================
                        DOM Manipulation
============================================================================*/
const body = document.querySelector("body");
const button = document.createElement("button");
button.innerHTML = "Click ME";
body.appendChild(button);

button.addEventListener("click", () => {
  let images = document.createElement("img");
  images.src = "https://picsum.photos/";
  body.append(images);
});

/*============================================================================
                        Async API calls
============================================================================*/

async function asyncAPIcalls() {
  const bringDatas = await fetch("https://reqres.in/api/users");
  const jsonData = await bringDatas.json();
  const personInfo = jsonData.data;

  const nameList = document.createElement("ul");
  body.append(nameList);

  for (let index = 0; index < 3; index++) {
    const getnames = personInfo[index].first_name;
    const names = document.createElement("li");
    names.innerHTML = getnames;
    nameList.append(names);
  }
}

asyncAPIcalls();

/*============================================================================
                        Working with Classes
============================================================================*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  logProduct(product) {
    console.log(`${this.name}is ${this.price} kr`);
  }
}

const items = new Product();
const itemPrice = items.logProduct;

const table = new Product("table", 1200);
itemPrice(table);

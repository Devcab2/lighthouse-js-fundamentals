const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// for loop printing ingredients in order
console.log("ingredients are:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// while loop printing ingredients in order

console.log("ingredients are:");
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// while loop printing in reverse

console.log("ingredients are:");
for (let i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}
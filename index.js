console.clear();

console.log("Hello");

// Declares a function called square that takes a parameter called number
const square = function (number) {
  console.log("running square ...", number);
  return number * number;
};

let favoriteNumber = 43;
console.log("favorite number test ", favoriteNumber);

square(favoriteNumber); // causes the square function and passes in favoriteNumber as an arguement
square(25);

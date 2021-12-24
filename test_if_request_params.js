const PetHouse = require("./if_request_params.js");

const myPetHouse = new PetHouse();

const searchResult1 = myPetHouse.search({
  color: "yellow",
});

console.log("result for 'color: yellow': ", searchResult1);

const searchResult2 = myPetHouse.search({
  color: "yellow",
  age: 1,
});

console.log("result for 'color: yellow, age: 1': ", searchResult2);

const searchResult3 = myPetHouse.search({
  age: "abc",
});

console.log("result for 'age: abc': ", searchResult3);

const searchResult4 = myPetHouse.search({
  age: [0, 1],
});

console.log("result for 'age: [0, 1]': ", searchResult4);

const searchResult5 = myPetHouse.search({
  name: "tom",
  age: [1],
});

console.log("result for 'name: tom, age: [1]': ", searchResult5);

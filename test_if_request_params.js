const CatCollection = require("./if_request_params.js");

const myCatCollection = new CatCollection();

const searchResult1 = myCatCollection.search({
  color: "yellow",
});

console.log("result for 'color: yellow': ", searchResult1);

const searchResult2 = myCatCollection.search({
  color: "yellow",
  age: 1,
});

console.log("result for 'color: yellow, age: 1': ", searchResult2);

const searchResult3 = myCatCollection.search({
  age: "abc",
});

console.log("result for 'age: abc': ", searchResult3);

const searchResult4 = myCatCollection.search({
  age: [0, 1],
});

console.log("result for 'age: [0, 1]': ", searchResult4);

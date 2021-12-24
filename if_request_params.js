module.exports = class CatCollection {
  myCats = [
    {
      name: "tom",
      color: "yellow",
      age: 1,
    },
    {
      name: "jack",
      color: "yellow",
      age: 3,
    },
    {
      name: "merry",
      color: "yellow",
      age: 0,
    },
  ];

  search(params) {
    let result = this.myCats;
    if (params.name && typeof params.name === "string") {
      result = result.filter((cat) => cat.name === params.name);
    } else if (params.name && typeof params.name !== "string") {
      return "params name is not valid";
    }
    if (params.color && typeof params.color === "string") {
      result = result.filter((cat) => cat.color === params.color);
    } else if (params.color && typeof params.color !== "string") {
      return "params color is not valid";
    }
    if (params.age && typeof params.age === "number") {
      result = result.filter((cat) => cat.age === params.age);
    } else if (
      params.age &&
      Array.isArray(params.age) &&
      params.age.length > 0
    ) {
      result = result.filter((cat) => params.age.includes(cat.age));
    } else if (params.age) {
      return "params age is not valid";
    }

    return result;
  }
};

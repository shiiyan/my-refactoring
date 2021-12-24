module.exports = class PetHouse {
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
    const validateResult = this.validateParams(params);
    if (!validateResult.isValid) {
      return validateResult.message;
    }

    /**
     * params
     * name: string | undefined
     * color: string | undefined
     * age: [] | undefined
     *
     */
    return this.myCats.filter(
      (cat) =>
        (params.name ? cat.name === params.name : true) &&
        (params.color ? cat.color === params.color : true) &&
        (params.age && params.age.length > 0 ? params.age.includes(cat.age) : true)
    );
  }

  validateParams(params) {
    if (params.name !== undefined && typeof params.name !== "string") {
      return {
        isValid: false,
        message: "params name is not valid",
      };
    }

    if (params.color !== undefined && typeof params.color !== "string") {
      return {
        isValid: false,
        message: "params color is not valid",
      };
    }

    if (params.age !== undefined && !Array.isArray(params.age)) {
      return {
        isValid: false,
        message: "params age is not valid",
      };
    }

    return {
      isValid: true,
      message: "",
    };
  }
};

const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("addCommas", () => {
  it("should add commas to the number n", () => {
    const n = 1234;
    spyOn(console, "log");
    addCommas(n);
    expect(console.log).toHaveBeenCalledWith("1,234");
  });
});
describe("addCommas", () => {
  it("should add commas to the number n", () => {
    const n = 1000000;
    spyOn(console, "log");
    addCommas(n);
    expect(console.log).toHaveBeenCalledWith("1,000,000");
  });
});
describe("addCommas", () => {
  it("should add commas to the number n", () => {
    const n = 9876543210;
    spyOn(console, "log");
    addCommas(n);
    expect(console.log).toHaveBeenCalledWith("9,876,543,210");
  });
});
describe("addCommas", () => {
  it("should add commas to the number n", () => {
    const n = 6;
    spyOn(console, "log");
    addCommas(n);
    expect(console.log).toHaveBeenCalledWith("6");
  });
});
describe("addCommas", () => {
  it("should add commas to the number n", () => {
    const n = -10;
    spyOn(console, "log");
    addCommas(n);
    expect(console.log).toHaveBeenCalledWith("-10");
  });
});
describe("addCommas", () => {
  it("should add commas to the number n", () => {
    const n = -5678;
    spyOn(console, "log");
    addCommas(n);
    expect(console.log).toHaveBeenCalledWith("-5,678");
  });
});


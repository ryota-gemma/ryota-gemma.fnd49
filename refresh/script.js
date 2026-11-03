"use strict";


console.log("refresh-assesment");
// #region test
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}

// #endregion


console.log("---------演習 1--------");
// #region 1
function feed(animal, object) {
  if (animal === "dog") {
    if (object["taste"] === "beef") {
      return "I love it!";
    } else {
      return "I don't like it!";
    }
  } else if (animal === "cat") {
    if (object["taste"] === "tuna") {
      return "I love it!";
    } else {
      return "I don't like it!";
    }
  }
}

test(feed("dog", { custom: "dog food", taste: "beef" }), "I love it!");
test(feed("dog", { custom: "dog food", taste: "chicken" }), "I don't like it!");
test(feed("dog", { custom: "cat food", taste: "chicken" }), "I don't like it!");

test(feed("cat", { custom: "cat food", taste: "tuna" }), "I love it!"); // "I love it!"
test(feed("cat", { custom: "cat food", taste: "chicken" }), "I don't like it!"); // "I don't like it!"
test(feed("cat", { custom: "dog food", taste: "beef" }), "I don't like it!"); // "I don't like it!"

// #endregion

console.log("---------演習 2--------");
// #region 2
function reverse(array) {
  const result = [];
  for (const item of array) {
    result.splice(0, 0, item)
  }
  return result;
}

test(reverse([1, 2, 3]), [3, 2, 1]);
test(reverse([{ name: "mike", isCat: true }, true, "hello!"]), [ "hello!", true, { name: "mike", isCat: true }]);

// #endregion

console.log("---------演習 3--------");
// #region 3
function calculateTotalWithTax(object1, object2) {
  let sumPrice = 0;
  for (const key in object1) {
    sumPrice += object1[key] * object2[key];
  }
  return sumPrice * 1.1;
}

const priceList = {
  apple: 150,
  banana: 190,
  grape: 2000,
  orange: 300,
};

const shoppingCart = {
  apple: 3,
  banana: 1,
  grape: 3,
  orange: 5,
};

test(calculateTotalWithTax(priceList, shoppingCart), 8954); // 8954
// #endregion

console.log("---------演習 4--------");
// #region 4

// #endregion

console.log("---------演習 5--------");
// #region 5

// #endregion

console.log("---------演習 6--------");
// #region 6

// #endregion

console.log("---------演習 7--------");
// #region 7

// #endregion

console.log("---------演習 8--------");
// #region 8

// #endregion

console.log("---------演習 9--------");
// #region 

// #endregion

console.log("---------演習 10--------");
// #region 10

// #endregion

console.log("---------演習 11--------");
// #region 11

// #endregion

console.log("---------演習 12--------");
// #region 12

// #endregion

console.log("---------演習 13--------");
// #region13

// #endregion

console.log("---------演習 14--------");
// #region 14

// #endregion

console.log("---------演習 15--------");
// #region 15

// #endregion

console.log("---------演習 16--------");
// #region 16

// #endregion
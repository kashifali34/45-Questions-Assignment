//• Tests for equality and inequality with strings
console.log("Apple" === "Apple");
//
//• Tests for equality and inequality with strings
console.log("Apple" != "orage");
// • Tests using the lower case function
console.log("lower case fucntion test : ", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality and inequality, 
console.log("equality test with number", 26 === 26);
// • Numerical tests involving equality and inequality
console.log("inequality test with number", 26 === 35);
//greater than and ,
console.log("greater then test", 10 > 5);
// less than
console.log("less then test", 5 < 10);
// greater than or equal to
console.log(" greater than or equal to test", 10 >= 10);
//  and less than or equal to
console.log(", and less than or equal to test", 5 <= 10);
// test "and" and
console.log("And operator test", 10 === 10 && 10 > 5);
//  "or" operators
console.log("or operator test", 10 === 10 || 5 > 10);
// • Test whether an item is in a array
var fruit = ['mango', 'apple', 'banana'];
console.log('Test "mango" in the array', fruit.includes("mango"));
// • Test whether an item is not in a array
console.log('testing "nashpati"is not in to arry', !fruit.includes("nashpati"));
for (var index = 0; index <= 10; index++) {
    var nn = index * 2;
    console.log('2 *' + index + "=" + nn);
}

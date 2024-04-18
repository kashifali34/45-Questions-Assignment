// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianss = [
    "harry potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbeldore",
];
function copyArry(arr) {
    return __spreadArray([], arr, true);
}
var magicians = [
    "harry potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbeldore",
];
function make_grat(magiciansarry) {
    magiciansarry.forEach(function (element) {
        console.log("the great ".concat(element));
    });
}
var magician = [
    "harry potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbeldore",
];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copymagicion = (magicianss);
// make_grat(copymagicion)
console.log('\n\nthis is my orignel arry:');
show_magicians(magicians);
console.log('\n\nthis is my modfied copy off the arry');
make_grat(copymagicion);

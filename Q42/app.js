var magicians = ['harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbeldore'];
function make_grat(magiciansarry) {
    magiciansarry.forEach(function (element) {
        console.log("the great ".concat(element));
    });
}
var magician = ['harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbeldore'];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_grat(magicians);
show_magicians(magician);

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var Guest_list = ["imran khan", "zia khan", "nawaz shareef"];
// for (let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Mr.' + Guest_list[i]  + ',\n\nit is our pleasure to invite you in our party.\n\n Thank you!');
// }
var abset_Guest = "imran khan";
var new_Guest = "kamran tessori";
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ",\n\nit is our pleasure to invite you in our party.\n\n Thank you!");
}
console.log("Dr.".concat(abset_Guest, " in not coming to the party"));
console.log("Good news! we find bigg table so we are inviting 3 more guest,");
Guest_list.unshift("Sir Daniyal");
Guest_list.splice(2, 0, "Kashif Ali");
Guest_list.push("Asharib Ali");
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ",\n\nit is our pleasure to invite you in our party.\n\n Thank you!");
}

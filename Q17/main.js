var Guest_list = ["imran khan", "zia khan", "nawaz shareef"];
// for (let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Mr.' + Guest_list[i]  + ',\n\nit is our pleasure to invite you in our party.\n\n Thank you!');
// }
var abset_Guest = "imran khan";
var new_Guest = "kamran tessori";
Guest_list[0] = new_Guest;
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log( "Dear Mr." +Guest_list[i] + ",\n\nit is our pleasure to invite you in our party.\n\n Thank you!"
//   );
// }
console.log("Dr.".concat(abset_Guest, " in not coming to the party"));
console.log("Good news! we find bigg table so we are inviting 3 more guest,");
Guest_list.unshift("Sir Daniyal");
Guest_list.splice(2, 0, "Kashif Ali");
Guest_list.push("Asharib Ali");
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ",\n\nit is our pleasure to invite you in our party.\n\n Thank you!");
}
console.log("\nsorry we can not arrage big table, only two people wll be invited");
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list.pop();
    console.log("sorry Mr ".concat(remove_Guest, ", You are not invited for dinner"));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ",\n\nYou are still invited.\n\n Thank you!");
}
Guest_list.splice(0, 2);
console.log(Guest_list);

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest_list: string[] = ["imran khan", "zia khan", "nawaz shareef"];

// for (let i=0; i<Guest_list.length; i++) {

//     console.log('Dear Mr.' + Guest_list[i]  + ',\n\nit is our pleasure to invite you in our party.\n\n Thank you!');

// }

let abset_Guest: string = "imran khan";
let new_Guest: string = "kamran tessori";
Guest_list[0] = new_Guest;

// for (let i = 0; i < Guest_list.length; i++) {
//   console.log( "Dear Mr." +Guest_list[i] + ",\n\nit is our pleasure to invite you in our party.\n\n Thank you!"
//   );
// }
console.log(`Dr.${abset_Guest} in not coming to the party`);

console.log("Good news! we find bigg table so we are inviting 3 more guest,");

Guest_list.unshift("Sir Daniyal");

Guest_list.splice(2, 0, "Kashif Ali");

Guest_list.push("Asharib Ali");

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Mr." +
      Guest_list[i] +
      ",\n\nit is our pleasure to invite you in our party.\n\n Thank you!"
  );
}

console.log(
  "\nsorry we can not arrage big table, only two people wll be invited"
);

while (Guest_list.length > 2) {
  let remove_Guest = Guest_list.pop();
  console.log(`sorry Mr ${remove_Guest}, You are not invited for dinner`);
}
for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Mr." + Guest_list[i] + ",\n\nYou are still invited.\n\n Thank you!"
  );
}

Guest_list.splice(0, 2);
console.log(Guest_list);

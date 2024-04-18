var Guest_list = ['imran khan', 'zia khan', 'nawaz shareef'];
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\n Thank you!');
}
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var abset_Guest = "imran khan";
var new_Guest = "kamran tessori";
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\n Thank you!');
}
console.log("Dr.".concat(abset_Guest, " in not coming to the party"));

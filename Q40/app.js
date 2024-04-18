// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title,
//  and it should return a Object containing these two pieces of information. 
//  Use the function to make three dictionaries representing different albums.
//   Print each return value to show that Objects are storing the album information correctly. 
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//    Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var albums = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
var newalbum = make_album('artist 1', 'title 1');
console.log(newalbum);
var newalbum1 = make_album('artist 2', 'title 2');
console.log(newalbum1);
var newalbum2 = make_album('artist 3', 'title 3', 12);
console.log(newalbum2);

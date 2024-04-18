// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let magicianss: string[] = [
    "harry potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbeldore",
  ];

  function copyArry(arr:string[]) {
    
    return [...arr]

 }

let magicians: string[] = [
    "harry potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbeldore",
  ];
  
  function make_grat(magiciansarry: string[]) {
    magiciansarry.forEach((element) => {
      console.log(`the great ${element}`);
    });
  }
  
  let magician: string[] = [
    "harry potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbeldore",
  ];
  
  function show_magicians(magicians: string[]) {
    magicians.forEach((element) => {
      console.log(element);
    });
  }
  let copymagicion=(magicianss)
// make_grat(copymagicion)
  console.log('\n\nthis is my orignel arry:');
  
  show_magicians(magicians);

  console.log('\n\nthis is my modfied copy off the arry');
  make_grat(copymagicion);
  

  
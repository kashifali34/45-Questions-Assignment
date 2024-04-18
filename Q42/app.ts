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

make_grat(magicians);

show_magicians(magician);

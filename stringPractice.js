var fullName = "Laura Castro";
var middleName = "Carmen";

// Character access
console.log(fullName.charAt(0)); // output: L
console.log(fullName[0]); // output: L

// Compare strings
const a = "a";
const b = "b";

console.log(a < b); //true
console.log(a > b); //false

// .concat
console.log(fullName.concat(" ", middleName)); // Laura Castro Carmen

// .endsWith
console.log(fullName.endsWith('o')); // true

// .includes
console.log(middleName.includes('Car')); // true

// .indexOf
console.log(fullName.indexOf('L')); // returns index 0

// .length
console.log(middleName.length); // returns index 6

// .match
const regex = /[A-Z]/g;
const found = fullName.match(regex);

console.log(found); // returns array ['L', 'C']

// .repeat
console.log(fullName.repeat(2)); //Laura CastroLaura Castro

// .replace
console.log(fullName.replace('a', 'Y')); //LYura Castro

// .replaceAll
console.log(fullName.replaceAll('a', 'Y')); //LYurY CYstro

// .search
console.log(fullName.search('C')); // returns index 6

// .slice
console.log(middleName.slice(1,4)); // arm

// .split
console.log(fullName.split(' ')); // ['Laura', 'Castro']

// .startsWith
console.log(fullName.startsWith('Z')); // returns false

// .substring
console.log(fullName.substring(0, 3)); // Lau

// .toLowerCase
console.log("CARMEN".toLowerCase()); // carmen

// .toUpperCase
console.log("carmen".toUpperCase()); // CARMEN


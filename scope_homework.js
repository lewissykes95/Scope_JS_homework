
// // #### Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// Output: The murderer is Miss Scarlet


// Reason: The above output is displayed as the function is called using the const variable which can be declared outwith the function block


// #### Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// // Output: ERROR 

// // Reason: An error will be outputed as the const variable has already been declared as 'Professor Plum' 



// #### Episode 3


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// First Output: First Verdict: Mrs Peacock

// Second Output: Second Verdict: Professor Plum

// Reason: The first verdict is the let variable inside the code block and the second pulls from outside the code block



// #### Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// First Output: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard

// Second Output: Suspect three is Mrs Peacock

// Reason: First output shows the 3 suspects plus the one from the function block and the Second output is from the original let variable



// #### Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);


// Output: The weapon is the Revolver

// Reason: As the constant variable is an object the weapon can be updated in the function 




// #### Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// Output: The murderer is Mrs White

// Reason: As the re-assignment of the variable happens within the same code block this can be changed twice to allow the re-assignment of the let variable




// #### Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// Output: The murderer is Mr Green


// Reason: Cant be changed (little confused on this one) ***




// #### Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);


// Output: The weapon is Candle stick 

// Reason: As the murderer is 'Colonel Mustard' the weapon changes to 'Candle Stick' as const variables allow changes in object items




// #### Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// Output: The murderer is Professor Plum

// Reason: As the let variable has been changed in the function code block this doesnt affect the variable outwith the code block




// ### Extensions

// Make up your own episode!

const scenario = {
  murderer: 'Jack Jarvis',
  room: 'Clansman',
  weapon: 'Victors Car'
};

const changeWeapon = function(weapon) {
        if (scenario.weapon === weapon);
        scenario.murderer = 'Boaby the bar man'

        let plotTwist = function(murderer) {
            if (scenario.murderer === murderer);
              scenario.murderer = 'Shug'
          }

          plotTwist('Shug')
    }

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`
}

changeWeapon('Buntin')
const verdict = declareMurderer();
console.log(verdict);

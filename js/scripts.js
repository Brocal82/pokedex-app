let pokemonList = [
    {name:'Pikachu', heights:0.4, type: ['electric']},
    {name:'Spearow', heights:0.3, type:['flying', 'normal']},
    {name:'Charizard', heights:1.7, type:['fire', 'flying']},
    {name:'Mr.Mime', heights:1.3, type:['Psychic', 'Fairy']},
    {name:'Golbat', heights:1.6, type:['poison', 'flying']}
];


//-----------------------------------------------------------------------------------------//

for (let i = 0; i < pokemonList.length; i++) {

    if (pokemonList[i].heights < 1 && pokemonList[i].heights > 0.3) {

        document.write(pokemonList[i].name + " is a small Pokemon " + pokemonList[i].heights + " (heights)" + '<br>');


    }else if (pokemonList[i].heights < 1.5 && pokemonList[i].heights > 1) {
        
        document.write(pokemonList[i].name + " is a medium Pokemon " + pokemonList[i].heights + " (heights)"+ '<br>');

    }else if (pokemonList[i].heights >= 1.7) {

        document.write(pokemonList[i].name + " is a big Pokemon " + pokemonList[i].heights + " (heights)"+ " WOW This one is a big one!!!!" + '<br>');

    }else {

        document.write(pokemonList[i].name + " is a big Pokemon " + pokemonList[i].heights + " (heights)" + '<br>');
    }
    }


    

// console.log(pokemonList.length);
// console.log(typeof pokemonList);
// console.log(pokemonList[0].name);
// console.log(pokemonList[2].type[0]);
// console.log(pokemonList[4].type);
// console.log(pokemonList[3].name);

// pokemonList[0].name = pokemonList[4].name;
// console.log(pokemonList[0].name);

// pokemonList[2].heights = pokemonList[0].heights;
// console.log(pokemonList[2].heights); 

// pokemonList[3].type[0] = pokemonList[4].type[0];
// console.log(pokemonList[3].type[0]);

//Task 1.3
// let age = 19;

// if (age === 20) {
//     console.log('You are 20 years old!');
//   } else if (age === 21) {
//     console.log('You are 21 years old!');
//   } else {
//     console.log('You are neither 20 nor 21 years old.');
//   }

// let day = 'Monday';

// if (day === 'Friday') {
//     console.log('Party Starts');
// } else if (day === 'Monday') {
//         console.log('What a shit day');
// } else if (day === 'Saturday') {
//         console.log('We are still partying');
// } else {
//         console.log('Life is Hard');
// }

// console.log(10 == '10')
// console.log(10 === '10')

// if ('input' && true) {
//     // some code in here will be executed
//   }
//   let age = 21;
//   if (age > 12 && age < 20) {
//     console.log('a teenager!');
//   }

// let condition = true;
// let condition = 1 >= 1;
// let condition = 1 >= 2;
// let condition = 1 != 2;
// let condition = null;
// let condition = false && '';
// let condition = false && 'Hello World!';
// let condition = null || false;
// let condition = false || 42;
// let condition = (42 >= (2 + 40)) && (false || 'Hello World');

// if(condition){
//   console.log('The result is true:', condition)
// }else{
//   console.log('The result is false:', condition)
// }


// THIS IS A LOOP:

// for (let i = 1; i >= 100; i++) { 
// //   console.log(i);
// // }


// print out all the values in an array containing people’s ages but two years younger:
// let ages = [20, 30, 25, 22, 31];
// for (let i = 0; i < ages.length; i++) { // ages.length goes accross de Array. In this example the length is 5 [0,1,2,3,4]. Arrays always start from the value 0
//   console.log(ages[i] - 2);
// }


// let years = [82, 83, 84, 85, 86, 87, 90];
// for (let i = 0; i < years.length; i++) {
//   console.log(years[i] - 1);
// }


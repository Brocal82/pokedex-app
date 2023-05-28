let pokemonRepository = (function () {

    let pokemonList = [

    {name:'Pikachu', heights:0.4, type: ['electric']},
    {name:'Spearow', heights:0.3, type:['flying', 'normal']},
    {name:'Charizard', heights:1.7, type:['fire', 'flying']},
    {name:'Mr.Mime', heights:1.3, type:['Psychic', 'Fairy']},
    {name:'Golbat', heights:1.6, type:['poison', 'flying']}
];


function add (pokemon) {
   if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);
   } else {
    console.log('input is incorrect');
   }
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
}

}) ();


function listPokemon(pokemon) {
    
    
    if (pokemon.heights < 1 && pokemon.heights > 0.3) {
        
        document.write(pokemon.name + " is a small Pokemon " + pokemon.heights + " (heights)" + '<br>');
        
        
    }else if (pokemon.heights < 1.5 && pokemon.heights > 1) {
        
        document.write(pokemon.name + " is a medium Pokemon " + pokemon.heights + " (heights)"+ '<br>');
        
    }else if (pokemon.heights >= 1.7) {
        
        document.write(pokemon.name + " is a big Pokemon " + pokemon.heights + " (heights)"+ " WOW This one is a big one!!!!" + '<br>');
        
    }else {
        
        document.write(pokemon.name + " is a big Pokemon " + pokemon.heights + " (heights)" + '<br>');
    }
};


console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Quilava', heights: 1.3, type: 'fire'});
console.log(pokemonRepository.getAll().forEach(listPokemon));












// function pokemon() {

//     for (let i = 0; i < pokemonList.length; i++) {

//         if (pokemon.heights < 1 && pokemon.heights > 0.3) {
    
//             document.write(pokemon.name + " is a small Pokemon " + pokemon.heights + " (heights)" + '<br>');
    
    
//         }else if (pokemon.heights < 1.5 && pokemon.heights > 1) {
            
//             document.write(pokemon.name + " is a medium Pokemon " + pokemon.heights + " (heights)"+ '<br>');
    
//         }else if (pokemon.heights >= 1.7) {
    
//             document.write(pokemon.name + " is a big Pokemon " + pokemon.heights + " (heights)"+ " WOW This one is a big one!!!!" + '<br>');
    
//         }else {
    
//             document.write(pokemon.name + " is a big Pokemon " + pokemon.heights + " (heights)" + '<br>');
//         }
//         }  
// }

// //The Array is printed as many times as the function is called
// pokemon(); 
// pokemon();
// pokemon();

//----------------------------------------------------------------------------------------------------------------------------

//forEach function:

// pokemonList.forEach(function(pokemon) {
//     console.log(pokemon);
// });


// pokemon();
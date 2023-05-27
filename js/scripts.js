let pokemonList = [
    {name:'Pikachu', heights:0.4, type: ['electric']},
    {name:'Spearow', heights:0.3, type:['flying', 'normal']},
    {name:'Charizard', heights:1.7, type:['fire', 'flying']},
    {name:'Mr.Mime', heights:1.3, type:['Psychic', 'Fairy']},
    {name:'Golbat', heights:1.6, type:['poison', 'flying']}
];


pokemonList.forEach (function (printArrayDetails) {


        if (printArrayDetails.heights < 1 && printArrayDetails.heights > 0.3) {
    
            document.write(printArrayDetails.name + " is a small Pokemon " + printArrayDetails.heights + " (heights)" + '<br>');
    
    
        }else if (printArrayDetails.heights < 1.5 && printArrayDetails.heights > 1) {
            
            document.write(printArrayDetails.name + " is a medium Pokemon " + printArrayDetails.heights + " (heights)"+ '<br>');
    
        }else if (printArrayDetails.heights >= 1.7) {
    
            document.write(printArrayDetails.name + " is a big Pokemon " + printArrayDetails.heights + " (heights)"+ " WOW This one is a big one!!!!" + '<br>');
    
        }else {
    
            document.write(printArrayDetails.name + " is a big Pokemon " + printArrayDetails.heights + " (heights)" + '<br>');
        }
        }); 

// function printArrayDetails() {

//     for (let i = 0; i < pokemonList.length; i++) {

//         if (printArrayDetails.heights < 1 && printArrayDetails.heights > 0.3) {
    
//             document.write(printArrayDetails.name + " is a small Pokemon " + printArrayDetails.heights + " (heights)" + '<br>');
    
    
//         }else if (printArrayDetails.heights < 1.5 && printArrayDetails.heights > 1) {
            
//             document.write(printArrayDetails.name + " is a medium Pokemon " + printArrayDetails.heights + " (heights)"+ '<br>');
    
//         }else if (printArrayDetails.heights >= 1.7) {
    
//             document.write(printArrayDetails.name + " is a big Pokemon " + printArrayDetails.heights + " (heights)"+ " WOW This one is a big one!!!!" + '<br>');
    
//         }else {
    
//             document.write(printArrayDetails.name + " is a big Pokemon " + printArrayDetails.heights + " (heights)" + '<br>');
//         }
//         }  
// }

// //The Array is printed as many times as the function is called
// printArrayDetails(); 
// printArrayDetails();
// printArrayDetails();

//----------------------------------------------------------------------------------------------------------------------------

//forEach function:

// pokemonList.forEach(function(printArrayDetails) {
//     console.log(printArrayDetails);
// });


// printArrayDetails();
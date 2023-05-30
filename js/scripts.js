let pokemonRepository = (function () {

    let pokemonList = [

    {name:'Pikachu', heights:0.4, type: ['electric']},
    {name:'Spearow', heights:0.3, type: ['flying', 'normal']},
    {name:'Charizard', heights:1.7, type: ['fire', 'flying']},
    {name:'Mr.Mime', heights:1.3, type: ['Psychic', 'Fairy']},
    {name:'Golbat', heights:1.6, type: ['poison', 'flying']}
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

function addListItem(pokemon) {

    let pokemonListItems = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');

    let button = document.createElement('button'); 
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');  //Creating class to give style
    listItem.appendChild(button);

    pokemonListItems.appendChild(listItem);
    
    button.addEventListener('click', function() { //No need to select button with querySelector(). Variable already created (button)
        showDetails(pokemon); //Calling function showDetails

    });

};

function showDetails(pokemon) {
    console.log(pokemon);
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
}

}) ();


pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

pokemonRepository.add({ name: 'Quilava', heights: 1.3, type: 'fire'});

console.log(pokemonRepository.getAll().forEach( function () {

}))



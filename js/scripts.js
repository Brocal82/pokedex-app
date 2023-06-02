
let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/'


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

function loadList() {

    return fetch(apiUrl).then(function (response) {

        return response.json();
    })

    .then(function (json) {

        json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
        })
    })

    .catch(function (error) {
        console.log(error);
    })
}
    

function loadDetails (pokemon) {

    let url = pokemon.detailsUrl;

    return fetch(url)
        .then(function(response) {
        return response.json();
    })

        .then(function (details) {
        pokemon.imgUrl = details.imgUrl;
        pokemon.height = details.height
    })
    .catch(function (error) {
        console.log(error);
    })
}

function showDetails(item) {
    pokemonRepository.loadDetails(item)
    console.log(item);
}


return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
}

}) ();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    })
});

pokemonRepository.add({ name: 'Quilava', heights: 1.3, type: 'fire'});

// console.log(pokemonRepository.getAll().forEach( function () {

// }))



let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'


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
    button.classList.add('pokemon-button');            //Creating class to give style
    listItem.appendChild(button);

    pokemonListItems.appendChild(listItem);
    
    button.addEventListener('click', function() {      //No need to select button with querySelector(). Variable already created (button)
        showDetails(pokemon);                          //Calling function showDetails

    });

};

function loadList() {

    return fetch(apiUrl).then(function (response) {    //Get info from API

        return response.json();                        //Translate it to json so all browsers can read 
                            
    }).then(function (json) {                                            

        json.results.forEach(function (item) {         // then loop on each pokemon over name and url (sprites)
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };

            add(pokemon);                              //and add it to the list
        })

    }).catch(function (error) {                        //just in case the browser does not support

        console.log(error);
    })
}
    

function loadDetails (pokemon) {                       

    let url = pokemon.detailsUrl;

    return fetch(url).then(function (response) {      //Get details from pokemon

        return response.json();                       //Translate it to json

    }).then(function (details) {                      

        pokemon.imgUrl = details.imgUrl;
        pokemon.height = details.height

    }).catch(function (error) {

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





let pokemonRepository = ( () => {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'


    function add(pokemon) {
        if (typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('input is incorrect');
        }
    }

    function getAll() {
        return pokemonList;
    }

    //Fetch data from the API
    function loadList() {
        return fetch(apiUrl).then((response) => {    //Get info from API
            return response.json();                        //Translate it to json so all browsers can read 
        }).then((json) => {
            json.results.forEach(function (item) {         // then loop on each pokemon over name and url (sprites)
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);                              //and add it to the list
            })
        }).catch((error) => {                        //just in case the browser does not support
            console.log(error);
        })
    }


    //Load the detailed data from pokemon
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {      //Get details from pokemon
            return response.json();                       //Translate it to json
        }).then(function (details) {
            pokemon.imgUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (error) {
            console.log(error);
        })
    }

    function addEventListener(button, pokemon) {
        button.addEventListener('click', function () {      //No need to select button with querySelector(). Variable already created (button)
            showDetails(pokemon);
        });
    }


    function addListItem(pokemon) {

        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');


        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn');            //Creating class to give style
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        addEventListener(button, pokemon);
    }


    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }


    // Function to show the modal
    function showModal(pokemon) {
        let modalTitle = document.querySelector('.modal-title');
        modalTitle.innerText = pokemon.name.toUpperCase();

        let modalBodyImage = document.querySelector('.modal-body-image');
        modalBodyImage.src = pokemon.imgUrl;
        modalBodyImage.alt = pokemon.name;

        let modalBodyHeight = document.querySelector('.modal-body-height');
        modalBodyHeight.innerText = `Height: ${pokemon.height}`;

        let modalBodyTypes = document.querySelector('.modal-body-types');
        modalBodyTypes.innerText = `Types: ${getPokemonTypes(pokemon.types)}`;

        function getPokemonTypes(types) {
            return types.map(type => type.type.name).join(', ');
        }

    }


    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
        showModal: showModal,
    };

})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});




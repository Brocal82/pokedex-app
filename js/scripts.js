let pokemonRepository = (function () {
    
    let modalContainer = document.querySelector('#modal-container');
    
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
        
        pokemon.imgUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map(function (type) {
            return type.type.name;
        });

    }).catch(function (error) {
        
        console.log(error);
    })
}

function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
        let modalTitle = pokemon.name;
        let modalText = "Height: " + pokemon.height + "\n\nTypes: " + pokemon.types.join(", ");

        showModal(modalTitle, modalText);

        let modalContent = document.querySelector('.modal'); 

        let pokemonImage = document.createElement('img');  //Creating img, class and calling
        pokemonImage.classList.add('pokemon-image');
        pokemonImage.src = pokemon.imgUrl;
        pokemonImage.alt = pokemon.name;

        modalContent.appendChild(pokemonImage);
    })             
    
}

// --------------------CREATING MODAL-----------------------------------

function showModal(title, text) {
    
    modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    let closeButtonElement = document.createElement('button'); //Create button
    closeButtonElement.classList.add('modal-close');           //add class to button
    closeButtonElement.innerText = 'Close';                    // add text to button
    closeButtonElement.addEventListener('click', hideModal);
    
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
}


// This function closes the modal windows:
let dialogPromiseReject;

function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
        dialogPromiseReject();
        dialogPromiseReject = null;
    }
}

//------------DIALOG FUNCTION------------------------

function showDialog(title, text) {
    showModal(title, text);


    let modal = modalContainer.querySelector('.modal');

    let confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm';

    let cancelButton = document.createElement('button');
    cancelButton.classList.add('modal-cancel');
    cancelButton.innerText = 'Cancel';

    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

    
    confirmButton.focus();
    return new Promise((resolve, reject) => {
        cancelButton.addEventListener('click', hideModal);
        confirmButton.addEventListener('click', () => {
            dialogPromiseReject = null;
            hideModal();
            resolve();
        });
        dialogPromiseReject = reject;
    });
    }

    document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('Confirm action', 'Are you sure you want to do this?')
    .then(function() {
        alert('confirmed!');
    }, () => {
        alert('not confirmed');
    });
    });

  //Closing Modal window by pressing ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) { 
            hideModal();
        }
    });
        
    //Closing Modal window by clicking anywhere over the layout
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('Modal title', 'This is the modal content');
    });

    //-----------------------------------------------------------------------
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

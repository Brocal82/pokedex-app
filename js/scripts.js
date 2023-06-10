let pokemonRepository = (function () {
    
    // let modalContainer = document.querySelector('#modal-container');
    
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

//Fetch data from the API
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


//Load the detailed data from pokemon
function loadDetails (pokemon) {                       
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
    button.addEventListener('click', function() {      //No need to select button with querySelector(). Variable already created (button)
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
    loadDetails(pokemon).then(function() {
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
modalBodyTypes.innerText = `Types: ${pokemon.types}`;

}

return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal,
}

}) ()


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
                            

            
        
    



    
        
        
        
        


// // --------------------CREATING MODAL-----------------------------------


    
    




//     let modal = document.createElement('div');
//     modal.classList.add('modal');
    
//     let closeButtonElement = document.createElement('button'); //Create button
//     closeButtonElement.classList.add('modal-close');           //add class to button
//     closeButtonElement.innerText = 'Close';                    // add text to button
//     closeButtonElement.addEventListener('click', hideModal);
    
//     let titleElement = document.createElement('h1');
//     titleElement.innerText = title;
    
//     let contentElement = document.createElement('p');
//     contentElement.innerText = text;

    
    
//     modal.appendChild(closeButtonElement);
//     modal.appendChild(titleElement);
//     modal.appendChild(contentElement);
//     modalContainer.appendChild(modal);
    
//     modalContainer.classList.add('is-visible');
// }


// // This function closes the modal windows:
// let dialogPromiseReject;

// function hideModal() {
//     let modalContainer = document.querySelector('#modal-container');
//         modalContainer.classList.remove('is-visible');

//     if (dialogPromiseReject) {
//         dialogPromiseReject();
//         dialogPromiseReject = null;
//     }
// }

// //------------DIALOG FUNCTION------------------------

//  function showDialog(title, text) {
//      showModal(title, text);


//      let modal = modalContainer.querySelector('.modal');

//      let confirmButton = document.createElement('button');
//      confirmButton.classList.add('modal-confirm');
//      confirmButton.innerText = 'Confirm';

//      let cancelButton = document.createElement('button');
//      cancelButton.classList.add('modal-cancel');
//      cancelButton.innerText = 'Cancel';

//      modal.appendChild(confirmButton);
//      modal.appendChild(cancelButton);

    
//      confirmButton.focus();
//      return new Promise((resolve, reject) => {
//          cancelButton.addEventListener('click', hideModal);
//          confirmButton.addEventListener('click', () => {
//              dialogPromiseReject = null;
//              hideModal();
//              resolve();
//          });
//          dialogPromiseReject = reject;
//      });
//      }



//     //-----------------------------------------------------------------------



// });

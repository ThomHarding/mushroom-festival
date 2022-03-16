// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    let name = friendInputEl.textContent;
    // get the name from the input
    let newFriend = { name: name, satisfaction: Math.ceil(Math.random() * 3) };
    // create a new friend object
    friendData.push(newFriend);
    // push it into the friends state array, passed in as an argument
    friendInputEl.textContent = '';
    // reset the input
    displayFriends();
    // display all the friends (use a function here)
});

function displayFriends() {
    friendsEl.textContent = '';
    // clear out the friends in DOM

    // for each friend in state . . .
    for (let friend of friendData) {
        let friendEl = renderFriend(friend);
        // use renderFriend to make a friendEl
        // this is a clickable list, so add an event listener to each friend
        friendEl.addEventListener('click', () => {
            // if the friend's satisfaction level is below 3 and you have mushrooms left
            if (mushroomCount === 0) {
                alert('No mushrooms. Forage more.');
            } else if (friend.satisfaction < 3) {
                //increment the friends satisfaction and decrement your mushrooms
                friend.satisfaction++;
                mushroomCount--;
                //then display your friends and mushrooms with the updated state
                displayFriends;
                displayMushrooms;
            }
        });
        friendsEl.appendChild(friendEl);
        // append the friendEl to the friends list in DOM
    }
}

function displayMushrooms() {
    // clear out the mushroom div

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
    }
}

displayFriends();
displayMushrooms();

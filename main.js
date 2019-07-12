// Kung Fu Panda Look Up

// Initialize Character Data
let characters = initCharacters();

// Event Listener
document.getElementById('search').addEventListener('click', characterSearch);

// Event Function
function characterSearch() {
    // Get Input Value (what character to look for?)
    let name = document.getElementById('input-name').value;

    // Find character data
    let currentCharacter = getCharacter(name);

    // Update page to display current character
    displayCharacter(currentCharacter);
}
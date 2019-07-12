function initCharacters() {
    // Initialize and return and array of character objects
    return [
        {
            name: 'Po',
            imgFile: 'po.png',
            quote: 'Buddy, I am the Dragon Warrior.',
            link: 'https://kungfupanda.fandom.com/wiki/Po'
        },
        {
            name: 'Tigress',
            imgFile: 'tigress.png',
            quote: 'That was pretty hardcore!',
            link: 'https://kungfupanda.fandom.com/wiki/Tigress'
        },
        {
            name: 'Mantis',
            imgFile: 'mantis.png',
            quote: 'Fear the Bug!',
            link: 'https://kungfupanda.fandom.com/wiki/Mantis'
        }
    ]
}

function getCharacter(characterName) {
    // Search for and return the character object for characterName
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].name == characterName) {
            return characters[i];
        }
    }
}

function displayCharacter(aChar) {
    // Update page to display character object argument
    document.getElementById('main-img').src = 'images/' + aChar.imgFile;
    document.getElementById('character-name').innerHTML = aChar.name;
    document.getElementById('quote').innerHTML = aChar.quote;
    document.getElementById('wiki-link').innerHTML = aChar.name + ' Wiki';
    document.getElementById('wiki-link').href = aChar.link;
}
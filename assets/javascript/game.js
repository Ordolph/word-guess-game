var nintendoArray = [
    "Gameboy", "Gamecube", "DualScreen", "WiiU", "Switch",
    "Pokemon", "Metroid", "Mario Bros.", "Castlevania",
    "SmashBros.", "MarioKart", "Mario Party", "Pikachu",
    "Mario", "Luigi", "Link", "Zelda", "Gannondorf",
    "Samus", "Earthbound", "CaptainFalcon", "FZero",
    "StarFox", "Falco", "Peach", "Daisy", "Wario"
];

var wordGuess = nintendoArray[Math.floor(Math.random() * nintendoArray.length)];

var underscore = "_ " ;

var wordUnderscore = underscore.repeat(wordGuess.length) ;

var wordDisplay = document.getElementById("wordGuess");

document.onkeyup = function(event) {
    wordDisplay.textContent = wordUnderscore;
}



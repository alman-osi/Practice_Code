let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["Spade", "Diamond", "Clover", "Hearts"];

class Card {
    constructor(suit, value){ //initallize/creates a card
        this.suit = suit;
        this.value = value;
    }
}
class Deck {
    constructor(){ //initallizes a deck via array
        this.Deck = [];
    }
    createDeck(suits, values){
        for(let suit of suits){ //for each suit
            for(let value of values){ //for each value
                this.Deck.push(new Card(suit, value)); 
                /**for each value of each suit...
                pushes a new card into the deck, 
                based on the arrays 'suit' and 'value'*/
            }
        }
        return this.Deck; //'this.Deck' is always UPPER CASE
    }
    Shuffle(){
        let counter = this.Deck.length, temp, i;
        while(counter){ 
            //This flips indexes/indices while randomizing them
            i = Math.floor(Math.random() * counter--);
            temp = this.Deck [counter];
            this.Deck[counter] = this.Deck[i];
            this.Deck[i] = temp;
        }
        return this.Deck;
    }
    Deal(){
            let hand = [];
            while(hand.length < 10){
                hand.push(this.Deck.pop());
            }
            return hand;
    }
}
class thePlayers{
    constructor(player_Amnt){
        this.player_Amnt = player_Amnt;
    }
    playerBase() { //input the amount of players here
        let player_Amnt = prompt("Please enter amount of players");
        if (player_Amnt != null) {
            if (2 <= player_Amnt && player_Amnt <= 6) {
                console.log("Success! " + player_Amnt + " players are now in the game");
                switch (player_Amnt) {
                    case '2':
                        deck.createDeck(suit, value);
                        console.log("One deck is available");
                        break;
                    case '3':
                    case '4':
                        deck.createDeck(suit, value);
                        deck.createDeck(suit, value);
                        console.log("Two decks are now available");
                    
                        break;
                    case '5':
                    case '6':
                        deck.createDeck(suit, value);
                        deck.createDeck(suit, value);
                        deck.createDeck(suit, value);
                        console.log("Three decks are now available");
                        break;
                    default:
                        console.log("Number of entered for this game is invalid. Select 2-6 Players.");
                        break;
                }
                deck.Shuffle();

                //informs players of their cards
                for (let players = 1; players <= player_Amnt; players++){ 
                    console.log(deck.Deal()); 
                    console.log("Here are your 10 cards, player " + players);
                }
            }
            else {
                console.log("Choose an amount between 2 and 6 players!");
            }
        }
    }
}
class theGame extends thePlayers{
    constructor(players){
        super();
        this.players = players; //Currently undefined
    }
    playerTurn(){
        console.log(this.players + " are playing this game");
    }
    //code here

}
//'deck' in CONSOLE is always LOWER CASE via 'let' command below
let deck = new Deck(); //New deck is created 
let playerbase = new thePlayers();
let game = new theGame();
console.log(game.playerTurn());

//Create class called 'theGame' to code the game's instructions based on the players

//for-loop for player's scores or end results
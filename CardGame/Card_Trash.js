class Card{
    constructor(suit, value){ //initallize/creates a card
        this.suit = suit;
        this.value = value;
    }
}
class Deck{
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
    playerBase() { //input the amount of players here
        let player = prompt("Please enter amount of players");
        if (player != null) {
            if (2 <= player && player <= 6) {
                console.log("Success! " + player + " players are now in the game");
            }
            else {
                console.log("Choose an amount between 2 and 6 players!");
            }
        }
        /**let element = "";
         * for (let  x = 1; x <=10; x++){
         * element = "demo" + x;
         * document.getElementById(element).innerHTML = Deal();} */
    }
    Deal(){
        for (player_Amnt = player; player < player_Amnt; player++){
            let hand = [];
            while(hand.length < 10){
                hand.push(this.Deck.pop());
            }
            return hand;
        }   
    }
}
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["Spade", "Diamond", "Clover", "Hearts"];

//'deck' in CONSOLE is always LOWER CASE via 'let' command below
let deck = new Deck(); //New deck is created 
let player_Amnt = 1; //player amount selected
switch (player_Amnt) {
    case 2:
        deck.createDeck(suit, value);
        console.log("One deck made available");
        break;
    case 3:
    case 4:
        deck.createDeck(suit, value);
        deck.createDeck(suit, value);
        console.log("Two decks made available");
       
        break;
    case 5:
    case 6:
        deck.createDeck(suit, value);
        deck.createDeck(suit, value);
        deck.createDeck(suit, value);
        console.log("Three decks made available");
        break;
    default:
        console.log("Player number entered for this game is invalid. Select 2-6 Players.");
        break;
}
deck.Shuffle();
deck.Shuffle();
console.log(deck.Deal()); 
console.log("Here are your 10 cards, players.");
//for-loop for player's scores or end results

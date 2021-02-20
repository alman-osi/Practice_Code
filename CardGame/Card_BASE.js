/** MY INITAL ATTEMPT OF CREATING A DECK
let Hand; //make a max of []
let discardPile;
const Draw = 1;
if (true){   Hand += Draw;    document.write("Your hand is this much " + Hand); }
*/

//let card = new Card('Spade', 7);
//console.log(card);

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
    Deal(){
        let hand = [];
        while(hand.length < 2){
            hand.push(this.Deck.pop());
        }
        return hand;
    }
}
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["Spade", "Diamond", "Clover", "Hearts"];

//'deck' in CONSOLE is always LOWER CASE via 'let' command below
let deck = new Deck(); //New deck is created 

//deck COMMANDS go HERE
deck.createDeck(suit, value);
deck.Shuffle();

console.log(deck.Deal()); 
//*ANCHOR TODO


//Deck
//Create a regular card deck but manipulate it to be used specifically for war

    //52 cards
    //Each Card:
        //Rank (name value)
        //Suit (heart, spade, club, diamond)
        //Values
    //create a way to shuffle the deck
    //create a way to pass the cards to players

//Players
    //Player class? or game logic?

    //Name?
    //Score
    //Hand

//Game logic to play the Game
    //Game class? 
        //deck
        //player
        //pass cards
    //ways to compare the cards to each other

//Deck Class
    //Cards Array
    //Card Ranks Array
    //Card Suits Array
    

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            'Ace',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'Jack',
            'Queen',
            'King'
        ];
        this.suits = [
            'Hearts♥',
            'Diamonds♦',
            'Spades♠',
            'Clubs♣'
        ];
    }

    //create a method to create a deck - iterate over ranks and suits and push new card as an object into constructor - this.deck

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            //this runs the code through outer loop(suit)
            for(let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}` ,
                    value: j + 1
                }
            //this runs code through inner loop(ranks)
                this.deck.push(card)
                    //this ^ puts the value of ace at 1 rather than zero
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

//class for a game (war)
    //deck - instantiate a new deck inside game class
    //create the deck, shuffle the deck, pass the deck
    //logic to play the game
        //turn based, but how many?
        //control flow statement logic to decide who wins
    //players (two players)
        //name (player 1/2)
        //hand
        //score

        class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }

    //method to play game
    //pass out cards to players
    //x amount of turns
    //number of cards player has
    //award points based on card values
    //log winner

    playGame() {
        //instantiate a new deck, create a deck, then shuffle deck
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length !== 0) {

            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
            //.push with .shift returns first item in the array AND THEN removes it
        }

        //playing the game - x amount of turns

        for (let i = 0; i < this.player1.hand.length; i++) {
            //conditional logic to award points based on comparing card values
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 1 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                    `)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 2 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                    `)
            } else {
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Tie: No Points Awarded
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
                    `)
            }
        }

        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 wins!
                Final Score: P1: ${this.player1.score}
                             P2: ${this.player2.score}
                `)
        } else if (this.player2.score > this.player1.score) {
            console.log(`Player 2 wins!
                Final Score: P1: ${this.player1.score}
                             P2: ${this.player2.score}
                `)
        } else {
            console.log(`Tie Game!
                Final Score: P1: ${this.player1.score}
                             P2: ${this.player2.score}
                `)
        }

    }

}

const game = new Game
game.playGame()


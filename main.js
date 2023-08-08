class Card {
    constructor(color, value) {
        this.color = color;
        this.value = value;
    }
}

class Player {
    constructor(id) {
        this.id = id;
        this.hand = [];
    }

    drawCard(card) {
        this.hand.push(card);
    }

    playCard(card) {
        const index = this.hand.findIndex(c => c.color === card.color && c.value === card.value);
        if (index !== -1) {
            this.hand.splice(index, 1);
            return true;
        }
        return false;
    }
}

class UnoGame {
    constructor() {
        this.colors = ['red', 'green', 'blue', 'yellow'];
        this.values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'skip', 'reverse', 'draw2'];
        this.drawPile = [];
        this.discardPile = [];
        this.players = [];
        this.currentPlayerIndex = 0; // Added to track the current player's index
        this.direction = 1; // 1 for clockwise, -1 for counterclockwise

        this.initialize();
        this.dealInitialHands();
        this.startGame();
    }

    initialize() {
        this.createDrawPile();
        this.shuffleDrawPile(); // Call the shuffle method to actually shuffle the draw pile
    }

    dealInitialHands() {
        for (let i = 0; i < 7; i++) {
            for (const player of this.players) {
                const card = this.drawPile.pop();
                player.drawCard(card);
            }
        }
    }

    createDrawPile() {
        // Create a deck of cards and add them to the draw pile
        for (const color of this.colors) {
            for (const value of this.values) {
                this.drawPile.push(new Card(color, value));
            }
        }
    }

    shuffleDrawPile() {
        // Move the shuffleDeck function out of the method and make it static
        UnoGame.shuffleDeck(this.drawPile);
    }

    static shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    startGame() {
        console.log("Uno game started!");
        // Add your game logic here to manage turns and gameplay
    }

    // Add the rest of your methods here to implement gameplay

    // For brevity, I'm omitting the rest of the methods needed for Uno gameplay.
}

// Create two players and start the game
const player1 = new Player(1);
const player2 = new Player(2);
const unoGame = new UnoGame();
unoGame.players = [player1, player2];

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
        this.players = this.player;
        this.currentPlayer = 0;
    }

    initialize() {
        this.createDrawPile();
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

    }

    shuffleDrawPile() {

    }

    playCard() {

    }
}

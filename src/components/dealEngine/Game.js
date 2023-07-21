export class Deck {
  constructor() {
    this.deck = this.createDeck();
  }

  createDeck() {
    const suits = [
      { symbol: "♡", color: "red" },
      { symbol: "♢", color: "red" },
      { symbol: "♣", color: "black" },
      { symbol: "♠", color: "black" },
    ];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const deck = [];

    for (let suit of suits) {
      for (let value of values) {
        deck.push({ suit: suit.symbol, value, color: suit.color });
      }
    }

    return this.shuffle(deck);
  }

  shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  }

  drawCard() {
    return this.deck.pop();
  }
}

export class Game {
  constructor() {
    this.deck = new Deck();
    this.players = [];
    this.flop = [];
    this.turn = {};
    this.river = {};
  }

  addPlayer(player) {
    this.players.push(player);
  }

  dealHoleCards() {
    for (let player of this.players) {
      player.hand.push(this.deck.drawCard(), this.deck.drawCard());
    }
  }

  dealFlop() {
    this.flop.push(
      this.deck.drawCard(),
      this.deck.drawCard(),
      this.deck.drawCard()
    );
  }

  dealTurn() {
    this.turn = this.deck.drawCard();
  }

  dealRiver() {
    this.river = this.deck.drawCard();
  }

  getGameState() {
    const playersCards = this.players.map((player) => ({
      name: player.name,
      cards: player.hand,
    }));

    return {
      playersCards,
      flop: this.flop,
      turn: this.turn,
      river: this.river,
    };
  }
}

export class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
}

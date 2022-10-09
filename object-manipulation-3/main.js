console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Tim', hand: [] },
  { name: 'Jack', hand: [] },
  { name: 'Michael', hand: [] },
  { name: 'Draymond', hand: [] }
];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];

function getDeck(rank, suit) {
  var container = [];
  var card = {};
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      card.suit = suit[i];
      card.rank = rank[j];
      container.push(card);
      card = {};
    }
  }
  return container;
}

function dealer(shuffled) {
  for (var j = 0; j < players.length; j++) {
    if (players[j].hand.length === 0) {
      players[j].hand.push(shuffled[0]);
      players[j].hand.push(shuffled[1]);
      shuffled.splice(0, 2);
    }
  }
}

function decideWinner(players) {
  var score = 0;
  var name = null;

  for (var i = 0; i < players.length; i++) {
    if (players[i].hand[0].rank === ('Queen' || 'Jack' || 'King')) {
      players[i].hand[0].rank = 10;
    }
    if (players[i].hand[0].rank === 'Ace') {
      players[i].hand[0].rank = 11;
    }
    if (players[i].hand[1].rank === ('Queen' || 'Jack' || 'King')) {
      players[i].hand[1].rank = 10;
    }
    if (players[i].hand[1].rank === 'Ace') {
      players[i].hand[1].rank = 11;
    }
    if (players[i].hand[0].rank + players[i].hand[1].rank > score) {
      score = players[i].hand[0].rank + players[i].hand[1].rank;
      name = players[i].name;
    }
  }
  return name;
}

function cardGame() {
  var deck = getDeck(rank, suit);
  var shuffled = _.shuffle(deck);

  dealer(shuffled);

  var winner = decideWinner(players);
  console.log(winner + ' is the winner!');
}

cardGame();

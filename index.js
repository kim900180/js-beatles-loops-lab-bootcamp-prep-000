// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts) {
  var length = facts.length - 1;
  while (length >= 0) {
    facts[length] = facts[length] + "!!!"
    length--
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I loe the Beatles!")
  } while (n < 15)
}
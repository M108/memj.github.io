var quotes = [
    ["Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.", "- Albert Einstein"],
    ["What we think, we become.", "- Buddah"],
    ["Know thy self, know thy enemy. A thousand battles, a thousand victories.", "- Sun Tzu"],
    ["Be yourself; everyone else is already taken.", "- Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "- Albert Einstein"],
    ["Perfection is not attainable, but if we chase perfection we can catch excellence.","- Vince Lombardi"],
    ["Believe you can and you're halfway there.","- Theodore Roosevelt"],
    ["You can avoid reality, but you cannot avoid the consequences of avoiding reality.","- Ayn Rand"],
    ["Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "- Eric S. Raymond"],
    ["Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.","- Larry Wall"]
];

  $(document).ready(function() {
    myFunction();
    $("#btn").click(function() {
    myFunction();
    });
  });

function myFunction() {
  var rand = 0;
var randNumber = 1;    
    rand = Math.floor(Math.random() * quotes.length);
    if (rand == randNumber) {
        myFunction();
    } else {
    randNumber = rand;
$("#quote").empty().append(quotes[rand][0]);
$("#credit").empty().append(quotes[rand][1]);
    
  var quote1 = quotes[rand][0];
  var author1 = quotes[rand][1];
  var tweet = "https://twitter.com/intent/tweet?text=" + quote1 + " " + author1 + "" ;
  $('#twitter').attr("href",tweet);    
}
}
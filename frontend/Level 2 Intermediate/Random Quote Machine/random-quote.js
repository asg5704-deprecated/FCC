var quote = document.getElementById('quote');
var newQuote = document.getElementById('newQuote');
var tweetQuote = document.getElementById('tweetQuote');

newQuote.addEventListener("click", function() {
  	getQuote(quoteArr);
});

tweetQuote.addEventListener("click", function() {
	pushTweet();
});

function getQuote(quoteArr) {
	var random = Math.floor(Math.random() * quoteArr.length);
	var quoteText = quoteArr[random].quoteText;
	var author = quoteArr[random].author;
	var book = quoteArr[random].book
	return quote.innerHTML = `'<em>${quoteText}'</em>` + `<br>-<strong>${author}</strong>`;
}

function pushTweet(quoteArr) {
	//Grab quote text
	var myTweet = quote.textContent;
	//Set new href to include myTweet
	tweetQuote.href = `https://twitter.com/intent/tweet?text=${myTweet}`;
}

//JSON file
var quoteArr = [
	{quoteText: "It does not do to dwell on dreams and forget to live.",
	author: "Dumbledore"},
	{quoteText: "'I am not worried, Harry,' said Dumbledore, his voice a little stronger despite the freezing water. 'I am with you.'",
	author: "Dumbledore"},
	{quoteText: "Of course it is happening inside your head, Harry, but why on Earth should that mean that it is not real?",
	author: "Dumbledore"},
	{quoteText: "You're a wizard, Harry",
	author: "Hagrid"},
	{quoteText: "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
	author: "Dumbledore"},
	{quoteText: "We could all have been killed - or worse, expelled.",
	author: "Hermione"},
	{quoteText: "Not my daughter, you bitch!",
	author: "Mrs. Weasley"},
	{quoteText: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic",
	author: "Dumbledore"},
	{quoteText: "It's wingardium leviOsa, not leviosAH.",
	author: "Hermione"},
	{quoteText: "We've all got both light and dark inside us.  What matters is the part we choose to act on.  That's who we really are.",
	author: "Dumbledore"},
	{quoteText: "'I'm not going to be murdered,' Harry said out loud.  'That's the spirit, dear,' said his mirror sleepily.",
	author: "Harry Potter"},
	{quoteText: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
	author: "Dumbledore"},
	{quoteText: "Just because you have the emotional range of a teaspoon doesn't mean we all have",
	author: "Hermione"},
	{quoteText: "'We're not going to use magic?' Ron ejaculated loudly.",
	author: "Ron"},
	{quoteText: "Until the very end.",
	author: "Lily Potter"},
	{quoteText: "I solemnly swear I am up to no good.",
	author: "Harry Potter"},
	{quoteText: "'After all this time?' 'Always,' said Snape.",
	author: "Snape"}
];
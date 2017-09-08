$(document).ready(function() {
	var currentQuote = "";
	var currentAuthor = "";

	function changeQuote() {

		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) { //retrieve JSON from API

			document.getElementById("quote").innerHTML = json.quoteText;

			currentQuote = json.quoteText;
			document.getElementById("author").innerHTML = json.quoteAuthor;
			currentAuthor = json.quoteAuthor;
		});
	};

	changeQuote();
	$("#getQuote").on("click", function() {
		changeQuote();
	});

	$("#tweetquote").on("click", function() {
		$('#tweetquote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(currentQuote + ' - ' + currentAuthor));
	});
});

//color cycle
var counter = 0;
var colors = [
	"#a7c854",
	"#f1902c",
	"#0294c7",
	"#c51e62"
];

var $div = $('.coloring');

$('.new').click(function() {

	$div.css({
		"background-color": colors[(counter++) % colors.length]
	});
});
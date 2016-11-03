//initial movie list
var movies = ['the dark knight', 'inception', 'the avengers', 'harold and kumar go to white castle', 'tropic thunder', 'hitman', 'skyfall', 'batman vs superman' ];

//create initial movie buttons
for (var i = 0; i < movies.length; i++){
		var b = $('<button>');
		b.addClass('movie btn btn-default')
		var movieSpace = movies[i].replace(/ /g, "+");
		b.attr('data-name', movieSpace);
		b.text(movies[i]);
		$('#buttonHolder').append(b);
}

//create buttons
function createBTN (){
	$('#buttonHolder').empty();
	for (var i = 0; i < movies.length; i++){
		var b = $('<button>');
		b.addClass('movie btn btn-default')
		var movieSpace = movies[i].replace(/ /g, "+");
		b.attr('data-name', movieSpace);
		b.text(movies[i]);
		$('#buttonHolder').append(b);
	}
}

//on search: push new movies to array, create new button and clear value
$('#movieSearchBTN').on('click', function(){
	if($('#movieSearch').val() != ""){
		var movieTXT = $('#movieSearch').val().trim();
		var newMovie = movieTXT.toLowerCase();
		movies.push(newMovie);
		createBTN();
		$('#movieSearch').val("");
		return false;
	}
});

//send request for gifs

//create div

//get movie rating

//get movie images

//append elements to movie div

//warning message if not gif exist

//add active class to buttons

//pause image on click


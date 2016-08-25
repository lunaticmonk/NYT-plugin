(function(){
	var result;
	var url = "https://api.nytimes.com/svc/topstories/v1/home.json";
	url += '?' + $.param({
		'api-key': "c03450084d7c477181e7564d95b5023c"
	});
	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(data) {
		console.log(data);
		display(data);
	}).fail(function(err) {
		throw err;
	});

	function display(data){
		var stories = data.results;
		$.each(stories,function(index,abstract){
			$('ul.stories').append('<li>' + stories[index].abstract + '</li>' 
				+ '<p>:-' + stories[index].byline +'</p>'
				+ '<h4>Date : ' + stories[index].created_date + '</h4>'	
				+  '<hr>');
		});
	}
	
})();

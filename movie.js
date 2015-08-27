/*
JS for Movie Rev'u
*/

$("document").ready(function(){

	var url = [
			"https://api.myjson.com/bins/2oofe",
			"https://api.myjson.com/bins/4yc8q",
			"https://api.myjson.com/bins/33w9m",
			"https://api.myjson.com/bins/wlbu",
			"https://api.myjson.com/bins/41z4a",
			"https://api.myjson.com/bins/1jydm"
	];
	
	var reviewers = "https://api.myjson.com/bins/56p62"; //random 5 reviewers

/*********************
SEARCH CLICK FUNCTION
*********************/

	$(".button").click(function(evt){
		evt.preventDefault();
		var value = $(".value").val();
		console.log(value);
		alert("NyTimes API is useless so you cannot search for movies.  I apologize about this inconvenience")
	});

/*********************
FIRST TOP 5 SELECTIONS
*********************/
//print top 5 recent reviews
	function printThisFor1(data){
		for(var i = 0; i<5; i++){
			var html = '<li>';
			html += "<img src =";
			html += data.results[i].multimedia.resource.src;
			html += ">";
			html += "<p class = 'moviedesc'><a class = 'links' href =" + data.results[i].link.url;
			html += ">"
			html += data.results[i].sort_name + "</a></p>";
			html += '</li>';
			$("#order-1").append(html);
		};
	};
//print top 5 critics pick
	function printThisFor2(data){
		for(var i = 0; i<5; i++){
			var html = '<li>';
			html += "<img src =";
			html += data.results[i].multimedia.resource.src;
			html += ">";
			html += "<p class = 'moviedesc'><a class = 'links' href =" + data.results[i].link.url;
			html += ">"
			html += data.results[i].sort_name + "</a></p>";
			html += '</li>';
			$("#order-2").append(html);
		};
	};
//print top 5 dvd picks
	function printThisFor3(data){
		for(var i = 0; i<4; i++){
				var thisas = '<li>';
				thisas += "<img src =";
				thisas += data.results[i].multimedia.resource.src;
				thisas += ">";
				thisas += "<p class = 'moviedesc'><a href =" + data.results[i].link.url;
				thisas += ">"
				thisas += data.results[i].sort_name + "</a></p>";
				thisas += '</li>';
				$("#order-3").append(thisas);
			};
			var html = '<li id = "wtf">';
			html += "<p class = 'moviedesc'><a href =" + data.results[i].link.url;
			html += ">"
			html += data.results[4].sort_name + "</a></p>";
			html += "<div class = 'no-image'>"
			html += "<p>*Thumbnail not Avaialble*</p>"
			html += "</div>"
			html += '</li>';
			$("#order-3").append(html);
	};
//print top 5 nytimes top 1000
	function printThisFor4(data){
		for(var i = 0; i<5; i++){
			var html = '<li id = "wtf">';
			html += "<p class = 'moviedesc'><a href =" + data.results[i].link.url;
			html += ">"
			html += data.results[i].sort_name + "</a></p>";
			html += "<div class = 'no-image'>"
			html += "<p>*Thumbnail not Avaialble*</p>"
			html += "</div>"
			html += '</li>';
			$("#order-4").append(html);
			};
	};

/*********************
ARTICLES AND TRAILERS
*********************/
//print main (large) article
	function printMainArticle(data){
		var html = '<h5 id = "main-art-headline">';
		html += "<a href = ";
		html += data.results[0].link.url;
		html += ">";
		html += data.results[0].headline;
		html += "</a>";
		html += "</h5>";
		$(".main-article").html(html);

        var picture = "<a href = ";
        picture += data.results[0].link.url;
        picture += ">";
        picture += '<img src = "http://graphics8.nytimes.com/images/2015/07/24/arts/24SOUTHPAW1/24SOUTHPAW1-sfSpan.jpg">';
        picture +=  "</a>";
        $(".main-article").append(picture);

		var summary = '<p id = "main-art-summary">';
		summary += data.results[0].summary_short;
		summary += "</p>"
		$(".main-article").append(summary);
	};

//print small top article
	function printMiniArticles1(data){
		var html = '<h5 id = "topArt-headline">';
		html += "<a href =";
		html += data.results[1].link.url;
		html += ">";
		html += data.results[1].headline;
		html += "</a>";
		html += "</h5>";

		var picture = "<a href = ";
        picture += data.results[1].link.url;
        picture += ">";
        picture += '<img src = ';
        picture += data.results[1].multimedia.resource.src;
        picture += ">";
        picture +=  "</a>";

        var summary = '<p class = "summary"  id = "topArt-summary">';
        summary += data.results[1].summary_short;
        summary += "</p>";

        $("#topArt").append(html,picture,summary);
	};

//print small bottom article
	function printMiniArticles2(data){
		var html = '<h5 id = "bottomArt-headline">';
		html += "<a href =";
		html += data.results[4].link.url;
		html += ">";
		html += data.results[4].headline
		html += "</a>";
		html += "</h5>";

		var picture = "<a href = ";
        picture += data.results[4].link.url;
        picture += ">";
        picture += '<img src = ';
        picture += data.results[4].multimedia.resource.src;
        picture += ">";
        picture +=  "</a>";

        var summary = '<p class = "summary"  id = "bottomArt-summary">';
        summary += data.results[4].summary_short;
        summary += "</p>";

        $("#bottomArt").append(html,picture,summary);
	};

//print article links
	function printArticleLinks(data){
		for(var i = 0; i < 5; i++){
			var html = "<li><a href = " + data.results[i].link.url + "</a>" + data.results[i].sort_name + "</li>";
			$(".article-list").append(html);
		};
	};

//print trailer links
	function printTrailerLinks(data){
	for(var i = 0; i < 5; i++){
		var html = "<li><a href = " + data.results[i].related_urls.url + "</a>" + data.results[i].sort_name + "</li>";
		$(".trailer-list").append(html)
		};
	};

/*********************
SECOND TOP 5 SELECTIONS
*********************/
//print top 5 classics
	function printFiveClassics(data){
		for(var i = 0; i < 5; i++){
			var randomIndex = Math.floor(Math.random()*20);
			var random = data.results[randomIndex].sort_name;
			var html = "<li>";
			html += "<a class = 'links' href =";
			html += data.results[i].link.url;
			html += ">"
			html += random;
			html += "</li>";
			$("#classics").append(html);
		};
	};

//print random 5 movies
	function printRandom5(data){
		for(var i = 0; i < 5; i++){
			var randomIndex = Math.floor(Math.random()*20);
			var random = data.results[randomIndex].sort_name;
			var html = "<li>";
			html += "<a class = 'links' href =";
			html += data.results[i].link.url;
			html += ">"
			html += random;
			html += "</a></li>";
			$("#random-five").append(html);
		};
	};

//print reviewers from nytimes
	function printReviewers(data){
		for(var i = 0; i < 5; i++){
			var randomIndex = Math.floor(Math.random()*20);
			var random = data.results[randomIndex].sort_name;
			var html = "<li>";
			html += random;
			html += "</li>";
			$("#reviewers").append(html);
		};
	};

	$.getJSON(url[0], printThisFor1);
	$.getJSON(url[1], printThisFor2);
	$.getJSON(url[2], printThisFor3);
	$.getJSON(url[3], printThisFor4);
	$.getJSON(url[4], printFiveClassics);
	$.getJSON(url[0], printArticleLinks);
	$.getJSON(url[0], printTrailerLinks);
	$.getJSON(url[0], printMainArticle);
	$.getJSON(url[0], printMiniArticles1);
	$.getJSON(url[0], printMiniArticles2);
	$.getJSON(url[5], printRandom5);
	$.getJSON(reviewers, printReviewers);
});//end of ready function

/*********************
OTHER USEFUL CODE
*********************/
// $.ajax({
// 	type: "GET",
// 	url: "http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=7d56016af89a3bbbc31a762e9e198b78%3A19%3A72545161",
// 	contentType: "application/:",
// 	data: "jsonp",
// 	success: function(data){
// 		var html = '<li>';
// 		html += "<img src =";
// 		html += data.results[i].multimedia.resource.src;
// 		html += ">";
// 		html += "<p class = 'moviedesc'>" + data.results[i].sort_name + "</p>";
// 		html += '</li>';
// 		$("#order-1").append(html);
// 	}
// })

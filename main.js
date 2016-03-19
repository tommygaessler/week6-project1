$(document).ready(function(){

	$.ajax({
		url: 'https://api.myjson.com/bins/3gobv',
		type: 'GET',
		data: {
			format: 'json'
		},
		error: function(){
			alert('An error has occurred');
		},
		success: function(results){
			var states = results.data;
			for(i=0; i < states.length; i++) {
				var firstName = states[i].name;
				var cap = states[i].capital;
				var entered = states[i].enteredUnion;
				var pop = states[i].population;
				var birds = states[i].symbols[0].bird;
				var tree = states[i].symbols[0].tree;
				var flower = states[i].symbols[0].flower;
				var flag = states[i].symbols[1].flag;
				$('#states').append("<h3>" + firstName + "</h3><h4>" + cap + " - " + entered + " - " + pop + " - " + birds + " - " + tree + " - " + flower + " - " + "</h4>");
				$('#states').append("<span id='pics'>" + "</span>");
				document.getElementById("pics").id = firstName;
				afterLoad();
			}
		}
	})


	function afterLoad() {
		$("#states h3").css("color", "navy")
	};

	function clickPic(){
		$("#states").on('click', 'h3', function(){
			var stateName = $(this).text()
			console.log(stateName)
			$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
				{
					api_key: "",
					tags: stateName + "," + "sky",
					format: "json"
				},
				function(data) {
					$.each(data.items, function(i,item){
						$("<img />").attr("src", item.media.m).appendTo("#states #" + stateName);
						if ( i == 3 ) return false;
				});
			});
		});
	}

	clickPic();
});

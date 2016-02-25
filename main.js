$(document).ready(function(){

	$.ajax({
		url: 'https://api.myjson.com/bins/20gec',
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
				$('#states').append("<h3>" + firstName + "</h3><h4>" + cap + " - " + entered + " - " + pop + "</h4>");
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
					api_key: "4bc9fb038f6eaa557f946ead1eef1bd5",
					query: stateName,
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

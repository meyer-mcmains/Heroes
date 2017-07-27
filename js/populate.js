var nameList;
var ctr = 0;

$( document ).ready(function() {
	getHeroList();
});

function getHeroList() {
	$.get("../heroJSON/List/HeroList.txt", function(data) {
		var lines = data.split("\n");
		lines.pop();
		nameList = lines;
		console.log(nameList);
		populate(lines);
	}, 'text');
}

function populate(lines) {
	for(var i = 0, len = lines.length; i < len; i++) {
			$.getJSON( "../heroJSON/" + lines[i] + ".json", function( data ) {
	  			$.each(data, function(key, value){
	  				if(key === "Primary Attribute"){
	  					displayPortrait(value)
	  				}
	  			});
	  			ctr ++;
 			});
	}
}

function displayPortrait(attribute) {
	$('#' + attribute).append('<video loop class="portrait ball">' +
        						'<source src="video/portraits/' + nameList[ctr] +'.mp4" type="video/mp4">' +
							'</video>');
}
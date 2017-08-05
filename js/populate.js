var nameList;
var ctr = 0;

$(document).ready(function() {
	getHeroList();
});

function getHeroList() {
	$.get("../heroJSON/List/HeroList.txt", function(data) {
		var lines = data.split("\n");
		lines.pop();
		nameList = lines;
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
	  			if(ctr%10 === 0 && ctr <= 100) {
	  				$('.progress-bar').css('width', ctr + '%');
	  			}
 			});
	}
}

function displayPortrait(attribute) {
	$('#' + attribute).append('<video loop class="video portrait">' +
        						'<source src="video/portraits/' + nameList[ctr] +'.mp4" type="video/mp4">' +
							'</video>');
}

$(window).load(function() {
	setTimeout(function(){
		$('.load').css('display', 'none');
	}, 2000);
});

$('.list').on('mouseover', 'video', function() {
	$(this).get(0).play();
	$(this).css('-webkit-clip-path', 'none');
	$(this).css('max-width', '106.6');
	$(this).css('z-index', '1');
});

$('.list').on('mouseleave', 'video', function() {
	$(this).get(0).pause();
	$(this).css('-webkit-clip-path', 'polygon(30% 0, 82% 0, 82% 100%, 30% 100%)');
	$(this).css('max-width', '100px');
	$(this).css('z-index', '0');
});


$( document ).ready(function() {
	getHeroList();
});

function getHeroList() {
	$.get("../heroJSON/List/HeroList.txt", function(data) {
		var lines = data.split("\n");
		lines.pop();
		populate(lines);
	}, 'text');
}

function populate(lines) {
	for (var i = 0, len = lines.length; i < len; i++) {
			$('body').append('<video loop class="portrait">' +
        						'<source src="video/portraits/' + lines[i] +'.mp4" type="video/mp4">' +
							'</video>')
		}
}


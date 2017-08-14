
$(document).on('ready', function(){
	food_coloring();
	$("table tr td").click(function(e) {
		$(this).css("background", "#626975");
	});
});

var questions_clicked = {};

get_moar_cookies();

function eat_cookies(key, value) {
	questions_clicked[key] = value;
	Cookies.set('questions_clicked', JSON.stringify(questions_clicked), { expires: 1});
}

function get_moar_cookies() {
	values = Cookies.get('questions_clicked');
	if (typeof values !== "undefined") {
		questions_clicked = JSON.parse(values);
	}
}

function food_coloring() {
	for(i = 1; i < 26; i++) {
		key = "q" + i;
		if (key in questions_clicked) {
			$("#" + key).css("background", "#626975");
		}
	}
}
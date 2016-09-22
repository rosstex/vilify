jQuery(document).ready(function(){
	jQuery("#rain").jPlayer({
		ready: function() {
			jQuery(this).jPlayer("setMedia", {
				m4a: "http://rainymood.com/audio1110/0.m4a",
			    oga: "http://rainymood.com/audio1110/0.ogg"
			}).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
			var kickoff = function () {
				jQuery("#jquery_jplayer_1").jPlayer("play");
			    document.documentElement.removeEventListener(click, kickoff, true);
			};
			document.documentElement.addEventListener(click, kickoff, true);
		},
		playing: function() {
			document.getElementById("spinner").style.display="none";document.getElementById("volumeDiv").style.display="block";
		},
		swfPath: "/js",
		loop: true,
		supplied: "m4a, oga",
		preload: "none",
		volume: 0.5
	});
});
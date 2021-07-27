const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Programming",
				weight: 12.3
			}, {
				text: "CSS",
				weight: 8
			}, {
				text: "JavaScript",
				weight: 14
			}, {
				text: "React",
				weight: 3
			}, {
				text: "Redux",
				weight: 7
			}, {
				text: "HTML",
				weight: 10
			}, {
				text: "Node JS",
				weight: 9
			}, {
				text: "Mongo DB",
				weight: 15
			}, {
				text: "Firebase",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web & Mobile Developer.", "love everything about code.", "also teach programming to people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

$().ready(function() {

	$("#logo").click(function() {
			document.body.style.cursor = "pointer";
			location.href = "index.php";
		});
	
	
	
	var images = ["images/3/event1.png", "images/3/event2.png", "images/3/event3.png", "images/3/event4.png", "images/3/event5.png", "images/3/event6.png"];

	var current_image_index = 0;

	function next_image_index() {
		if (current_image_index < images.length - 1) {
			return current_image_index + 1;
		} else {
			return 0;
		}
	}

	var slider_container;
	var dot_container;

	$(function() {
		slider_container = $('.pic-box');
		dot_container = $('#dots');
		
		
		for (var i = 0; i < images.length; i++) {
			var row = images[i];
			var class_name = 'slider-img slider-off';
			var classes = "dots dot-on";
			if (i == 0) {
				class_name = 'slider-img';
				classes = 'dot-on';
				

			}

			var img = $('<img>').attr('src', row).addClass(class_name);

			slider_container.append(img);

			var div = $('<div>').addClass(classes);

			dot_container.append(div);

		};

		$('#rightArrow').click(function() {
			var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
			var next_image = $(slider_container.find('img.slider-img')[next_image_index()]);
			
			var current_dot = $(dot_container.find('div.dot-on')[current_image_index]);
			var next_dot = $(dot_container.find('div.dot-on')[next_image_index()]);
			
			current_image.animate({
				'left' : '-1020'
			}, 800, function() {
				current_image.addClass('slider-off').attr('style', '');
				
				current_dot.addClass('dots').attr('style', '');
				
				
			});
			next_image.animate({
				'left' : '0'
			}, 800, function() {
				next_image.removeClass('slider-off').attr('style', '');
				
				next_dot.removeClass('dots').attr('style', '');
			});

			current_image_index++;
			if (current_image_index == images.length) {
				current_image_index = 0;
			}
		});

		function previous_image_index() {
			if (current_image_index > 0) {
				return current_image_index - 1;
			} else {
				return images.length - 1;
			}
		}


		$('#leftArrow').click(function() {
			var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
			var prev_image = $(slider_container.find('img.slider-img')[previous_image_index()]);

			var current_dot = $(dot_container.find('div.dot-on')[current_image_index]);
			var prev_dot = $(dot_container.find('div.dot-on')[previous_image_index()]);
			
			prev_image.addClass('slider-prev');
			prev_image.animate({
				'left' : '0'
			}, 800, function() {
				prev_image.removeClass('slider-prev').removeClass('slider-off').attr('style', '');
				
				prev_dot.removeClass('dots').attr('style', '');

			});

			current_image.animate({
				'left' : '1020'
			}, 800, function() {
				current_image.addClass('slider-off').attr('style', '');
				
				current_dot.addClass('dots').attr('style', '');
			});

			current_image_index--;
			if (current_image_index < 0) {
				current_image_index = images.length - 1;
			}
		});

	});

});

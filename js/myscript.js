$().ready (function() { 	
			
		var images = [
		"images/1/emotion1.png",
		"images/2/just-because1.png",
		"images/3/event1.png"];
		
		
		var textSlide = [
		"share your emotions",
		"send flowers just because",
		"make your event special"];
		var current_image_index = 0;
		
		
		function next_image_index() {
			if (current_image_index < images.length -1) {
				return current_image_index +1;
			} else {
				return 0;
			}

		}

		var slider_container;
		var text_container;
		
		$(function () {
			slider_container = $('.pic-box');
			text_container = $('#floatText');
			
			
			for (var i = 0; i < images.length; i++)
			{
				var row = images[i];
				var imageText = textSlide[i];
				
				var class_name = 'slider-img slider-off';
				var classes = 'textShiftOff text-shift';
				if (i == 0) {
					class_name = 'slider-img';
					classes= 'text-shift';
				}
				
				var img = $('<img>')
								.attr('src', row)
								.addClass(class_name);
								
				slider_container.append(img);
				
				var txt = $('<h1>')
						.addClass(classes)
						.html(imageText);
						
				text_container.append(txt);
				
			};

			
			$('#rightArrow').click(function() {
				var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
				var next_image = $(slider_container.find('img.slider-img')[next_image_index()]);
				
				var current_text = $(text_container.find('h1.text-shift')[current_image_index]);
				var next_text = $(text_container.find('h1.text-shift')[next_image_index()]);
			
				current_image.animate({
					'left' : '-1020'
				}, 800, function() {
					current_image.addClass('slider-off')
									.attr('style', '');
									
					current_text.addClass('textShiftOff');
				});
					next_image.animate({
						'left' : '0'
					}, 800, function() {
						next_image
							.removeClass('slider-off')
							.attr('style', '');
							
						next_text.removeClass('textShiftOff');
							
					});
					
					current_image_index++;
					if(current_image_index == images.length) {
						current_image_index = 0;
					}
			});
			
			function previous_image_index() {
				if (current_image_index > 0) {
					return current_image_index -1;
				} else {
					return images.length -1;
				}
			}
			
			$('#leftArrow').click(function() {
				var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
				var prev_image = $(slider_container.find('img.slider-img')[previous_image_index()]);
				
				var current_text = $(text_container.find('h1.text-shift')[current_image_index]);
				var prev_text = $(text_container.find('h1.text-shift')[previous_image_index()]);
				
				
				prev_image.addClass('slider-prev');
				prev_image.animate({
					'left' : '0'
				}, 800, function() {
					prev_image
						.removeClass('slider-prev')
						.removeClass('slider-off')
						.attr('style', '');

						prev_text.removeClass('textShiftOff');
					
					
					
				});
				
				current_image.animate({
					'left' : '1020'
				}, 800, function() {
					current_image.addClass('slider-off').attr('style', '');
					
					
					current_text.addClass('textShiftOff');
				});
				
				
				current_image_index--;
				if(current_image_index < 0){
					current_image_index = images.length -1;
				}
			});
			
		});
			

}); 				// end of jQuery ready() function

			




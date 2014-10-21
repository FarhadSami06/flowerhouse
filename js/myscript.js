
	

		$("#logo").click(function() {
			document.body.style.cursor = "pointer";
			location.href = "index.php";
		});

			
		var images;
		
		var current_image_index = 0;
		
		
		function next_image_index() {
			if (current_image_index < images.length -1) {
				return current_image_index +1;
			} else {
				return 0;
			}

		}
		$(function() {
		var slider_container= $('#picture-box');
		images = slider_container.find('.slider-img');

		
		$(images[0]).removeClass('slider-off');
		
		
			
			$('#rightArrow').click(function() {
				var current_image = $(images[current_image_index]);
				var next_image = $(images[next_image_index()]);
				
				
				current_image.animate({
					'left' : '-1020'
				}, 800, function() {
					current_image.addClass('slider-off')
									.attr('style', '');
									
					
				});
					next_image.animate({
						'left' : '0'
					}, 800, function() {
						next_image
							.removeClass('slider-off')
							.attr('style', '');
							
						
							
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
				var current_image = $(images[current_image_index]);
				var prev_image = $(images[previous_image_index()]);
				
				prev_image.addClass('slider-prev');
				prev_image.animate({
					'left' : '0'
				}, 800, function() {
					prev_image
						.removeClass('slider-prev')
						.removeClass('slider-off')
						.attr('style', '');

											
					
					
				});
				
				current_image.animate({
					'left' : '1020'
				}, 800, function() {
					current_image.addClass('slider-off').attr('style', '');
					
					
				});
				
				
				current_image_index--;
				if(current_image_index < 0){
					current_image_index = images.length -1;
				}
			});
			
		});
			

			// end of jQuery ready() function

			




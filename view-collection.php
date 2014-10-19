<!DOCTYPE html>
<html>
	<?php
	require_once("config/constants.php");
	require_once("config/database.php");
	?>
	
	
	<head>
		<title>View Collection</title>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<link rel="stylesheet" href="css/main.css" />
		<script src="js/myscript2.js"></script>


	</head>
	<body class="collections">
		<div class="layout-container">
			<div id="top-bar"></div>
			<div class="header-container">
				
				<a href="index.php"><img id="logo" src="images/logo.png" /></a>

				<div class="navigation">
					<ul>
						<li id="home"><a href="index.php">Home</a></li>
						<li><a href="view-collection.php">Flower Collection</a></li>
						<li><a href="collection.php"><img src="images/phone.png" />&nbsp;&nbsp;(949) 300 2565</a></li>
					</ul>
				</div>
			</div>
			<div class="main-container">
				
				
				<div id="picture-box" class="pic-box">
					
					<div id="text-box">
						<img id="leftArrow" src="images/left-arrow.png" />
						<img id="rightArrow" src="images/right-arrow.png" />
					</div>
				</div>
				
				
				<div id="dots">
					
				</div>
			</div>
			<div class="footer-container">
				<p>Copyright &copy; 2014 FlowerHouse. All rights reserved | 234 Terry Fancois St. San Francisco,CA 94158, info@flowerhouse.com | Mon-Fri: 7am - 10pm, Sat - 8am - 10pm</p>
			</div>
			
		</div>
	
	</body>
</html>
<!DOCTYPE html>
<html>
	
	<?php
	require_once("config/constants.php");
	require_once("config/database.php");
	
	?>
	
					
	
	<head>
		<title>Home</title>
		<link rel="stylesheet" href="css/main.css" />
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="js/myscript.js"></script>
		
	</head>
	<body class="wrapper">
		<div class="layout-container">
				<div id="top-bar"></div>
			<div class="header-container">
			<img id="logo" src="images/logo.png" />
				<div class="navigation">
					<ul>
						<li id="home"><a href="index.php">Home</a></li>
						<li><a href="collection.php">Flower Collection</a></li>
						<li><img src="images/phone.png" />&nbsp;&nbsp;(949) 300 2565</li>
					</ul>
				</div>
			</div>
			<div class="main-container">
				
				<div id ="picture-box" class="pic-box">
					
				<?php
			
				$sql = "SELECT * FROM ".TBL_COLLECTIONS." ORDER BY `id` ASC";
				$query = mysql_query($sql, $db_link) or die(mysql_error());
				
				$collections = array();
				while ($row = mysql_fetch_assoc($query)) {
					
					$new_coll = array(); //new sub-array of $collections
		
					$new_coll["id"] = $row["id"];
					$new_coll["title"] = $row["title"];
					$new_coll["description"] = $row["description"];
					
					
					$p_sql = "SELECT * FROM ".TBL_PICTURES." WHERE `is_cover`='1' AND `collection`='".$row["id"]."' ORDER BY `id` ASC";
					$p_query = mysql_query($p_sql, $db_link) or die(mysql_error());
					$cover_photo = "";
					
					while ($p_row = mysql_fetch_assoc($p_query)) {
					$cover_photo = DIR_IMG."/".$row["id"]."/".$p_row["filename"];
					
					}
					$new_coll["cover"] = $cover_photo;
					$collections[] = $new_coll;
								
				
				
				?>
				
				<img class="slider-img slider-off" src="<?php echo $cover_photo; ?>" />
					
						 <?php } ?>
				
					<div id="text-box">
						<img id="leftArrow" src="images/left-arrow.png" />
						<img id="rightArrow" src="images/right-arrow.png" />
					</div>
				</div>
				
				
				<div class="main-text">
				<p>We offer a wide range of flower arrangements fit for any occasion. We specialize in tradiotional, modern, and extravagant flower designs. Flower House guarantees the most beautiful, elegant, and fresh flower arrangements in town! Give us a call and our friendly customer service representative will be there to answer your questions and/or take your order.</p>
			</div>
			</div>
			<div class="footer-container">
				<p>Copyright &copy; 2014 FlowerHouse. All rights reserved | 234 Terry Fancois St. San Francisco,CA 94158, info@flowerhouse.com | Mon-Fri: 7am - 10pm, Sat - 8am - 10pm</p>
			</div>
			
		</div>

	</body>
</html>
<!DOCTYPE html>
<html>
	<?php
	require_once("config/constants.php");
	require_once("config/database.php");
	?>
	
	
	<head>
		<title>Collection</title>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		
		<link rel="stylesheet" href="css/main.css" />
	</head>
	<body class="collection_list">
		<div class="layout-container">
				<div id="top-bar"></div>
			<div class="header-container">
				<a href="index.php"><img id="logo" src="images/logo.png" /></a>
				<div class="navigation">
					<ul>
						<li id="home"><a href="index.php">Home</a></li>
						<li id="flowers"><a href="collection.php">Flower Collection</a></li>
						<li><img src="images/phone.png" />&nbsp;&nbsp;(949) 300 2565</li>
					</ul>
				</div>
			</div>
			<div class="main-container">
				
					<?php
					$sql = "SELECT * FROM `collections` ORDER BY `id` ASC";
					$query = mysql_query($sql, $db_link) or die(mysql_error());
				
					$collections = array ();
					
					
					while($row = mysql_fetch_assoc($query)) {
						$new_coll = array();
						
						$new_coll["id"] = $row["id"];
						$new_coll["title"] = $row["title"];
						$new_coll["description"] = $row["description"];
						
						$p_sql = "SELECT * FROM `pictures` WHERE `is_cover`='1' AND `collection`='".$row["id"]."' ORDER BY `id` ASC";
						$p_query = mysql_query($p_sql, $db_link) or die(mysql_error());	
						$cover_photo_thumb = "";
						
						while ($p_row = mysql_fetch_assoc($p_query)) { //executed once, because no more than 1 picture in a collection can have `is_cover`=1				
						$cover_photo_thumb = DIR_IMG."/".$row["id"]."/".$p_row["thumb_filename"]; // [images directory] / [current collection directory] / [thumbnail filename]
						
						}
						
						$new_coll["cover_thumb"] = $cover_photo_thumb;
						
						//we build $collections as a nested array; its elements are also arrays
						
						$collections[] = $new_coll;
					?>	
					<div class="collection-img">
						<a href="view-collection.php"><img src="<?php echo $cover_photo_thumb; ?>" /></a>
						<div class="collection-text">
						<h1><?php echo $new_coll['title']; ?></h1>
						<p><?php echo $new_coll['description']; ?></p>
						</div>
					</div>

				<?php		
					}
					?>
				
				
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
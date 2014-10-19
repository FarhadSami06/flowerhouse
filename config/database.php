<?php
   global $db_link;
   
   $db_link = mysql_connect('localhost', 'root', 'root') or die ('Could not connect to db'  . mysql_error());
mysql_select_db('flowerhouse');
   if(!db_link) {
   	die("could not connect to the database: " . mysql_error());
   }
   
   ?>
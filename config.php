<?php 

$host ="localhost";
$username = "root";
$password = "";
$databasename ="oncrring";


$connection = new mysqli($host,$username,$password,$databasename);
	if (!$connection) {
		echo "Database connection faild";
	
	}






?>
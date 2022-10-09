<?php  

	include ("config.php");

	$publisher_id = $_POST['publisher_id'];
	//for image
	$image = $_FILES['image']['name'];
	$tital = $_POST['tital'];
    $descreption = $_POST['descreption'];

	$imagePath = 'uploads/'.$image;
	$tmp_name = $_FILES['image']['tmp_name'];

	move_uploaded_file($tmp_name, $imagePath);

	$connection->query("INSERT INTO jobs(publisher_id,image,tital,descreption)VALUES('".$publisher_id."','".$image."','".$tital."','".$descreption."')");



?>
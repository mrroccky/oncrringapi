<?php 
include('config.php');




  $id = $_GET['id'];
 // $cnd = "SELECT * FROM jobs WHERE id=$id"; 

$cnd ="SELECT
  jobs.id,
  jobs.publisher_id,
  jobs.image,
  jobs.descreption,
  jobs.long_decreption,
  jobs.tital,
  jobs.date,
  job_pub.publisher_id AS publisher_id,
  job_pub.name AS publisher_name
  
FROM jobs , job_pub
WHERE jobs.id = $id AND jobs.publisher_id = job_pub.publisher_id ORDER BY id DESC LIMIT 20";

 $query = mysqli_query($connection,$cnd);
 $result = array();
 while($fetchData=$query->fetch_assoc()){
  $result[]=$fetchData;
 }
   echo json_encode($result)



?>
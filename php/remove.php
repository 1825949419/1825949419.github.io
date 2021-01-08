<?php
header('content-type:text/html;charset=utf-8;');
$id =$_POST['id'];

$conn = mysqli_connect('127.0.0.1','root','root','user');

$sql = "DELETE  FROM `shuju` WHERE `data-id`=$id";
$mql = mysqli_query($conn,$sql);

//  echo $mql;

   echo 1;

?>
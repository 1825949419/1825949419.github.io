<?php
    header('content-type:text/html;charset=utf-8;');

$name = $_POST['name'];
$pass = $_POST['pass'];
$conn = mysqli_connect('127.0.0.1','root','root','user');

$sql = "INSERT INTO  `info` VALUES (null,$name,$pass)";
 $mql = mysqli_query($conn,$sql);

 if($mql){
     echo   1;
 }else{
     echo 0;
 }
?>
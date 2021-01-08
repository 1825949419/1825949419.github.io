<?php
header('content-type:text/html;charset=utf-8;');
 /* $num =$_POST['num']; */

$conn = mysqli_connect('127.0.0.1','root','root','user');

$sql = "SELECT * FROM `shuju`";
 $mql = mysqli_query($conn,$sql);
 $jei = mysqli_fetch_all($mql); 
  $jso = json_encode($jei);
  
 //有相同数据
    echo $jso;

 
// $sql = "select * from  shuju order by id desc limit 1";表里最后一行数据
//if($mql->num_rows>0){
 ?>



<?php
header('content-type:text/html;charset=utf-8;');
$id = $_POST['id'];
$num = $_POST['num'];
echo $id;
$conn = mysqli_connect('127.0.0.1','root','root','user');

$sql = "INSERT INTO  `shuju` VALUES (null,$id,$num)";
 $mql = mysqli_query($conn,$sql);
 if($mql){
     echo 1;
 }else {
    echo  0;
 }
 ?>
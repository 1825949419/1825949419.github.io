<?php
    header('content-type:text/html;charset=utf-8;');

    $n = $_POST['n'];
    $p = $_POST['p'];
    $conn = mysqli_connect('127.0.0.1','root','root','user');
   
    $sql = "SELECT * FROM  `info` WHERE `username`='$n' AND `password`=$p";
     $mql = mysqli_query($conn,$sql);
     $jei = mysqli_fetch_all($mql);            
    // $ar = json_encode($jei);
    if($jei){
        $arr = array('code'=>1);
        echo json_encode($arr);
        // header('./php/ages.php');
    }else{
        $arr = array('code'=>0);
        echo json_encode($arr);
    }
  
?>
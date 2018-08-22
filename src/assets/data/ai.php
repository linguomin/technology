<?php
header("Content-Type:application/json;charset=utf8");
require_once("./init.php");

$ai=$db->ai;

$all=$ai->find();
foreach($all as $ai){
    $output[]=$ai;	
}
echo json_encode($output);


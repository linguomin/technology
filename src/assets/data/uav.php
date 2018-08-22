<?php
header("Content-Type:application/json;charset=utf8");
require_once ("./init.php");
$output = [];

function getData($from,$size,$field){
global $db;
$collection= $db ->col;
$cursor=$collection->find()->skip($from)->limit($size);
global $output;
foreach($cursor as $collection){
	$output[$field][]=$collection;
	}
}
getData(0,5,"intr");
getData(5,3,"nav");
getData(8,4,"part2");
getData(12,6,"item");
getData(18,3,"part4");
getData(21,3,"uPart6One");
getData(24,3,"uPart6Two");
getData(27,3,"uPart6Three");
getData(30,1,"last");
echo json_encode($output);
?>
<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf8");
$url = "mongodb://localhost/technology";
$conn = new MongoClient($url);
$db = $conn -> technology;
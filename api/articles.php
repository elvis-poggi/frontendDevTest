<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset-UTF-8");

// TODO
// - remove unnecessary fields from JSON

$url = "http://18.195.225.57/articles.php";

$client = curl_init($url);
curl_setopt($client,true,true);
$response = curl_exec($client);

$result = json_decode($response);

echo $result->data; 

?>
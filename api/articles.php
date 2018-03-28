<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset-UTF-8");

function getArticles() {
  $url = "http://18.195.225.57/articles.php";
  
  $client = curl_init($url);
  curl_setopt($client, CURLOPT_RETURNTRANSFER, 1);
  $response = curl_exec($client);
  curl_close($client);
  
  return json_decode($response, true);
}

$articles = getArticles();

$result = array_map(function($a) {
  unset($a['owner_id']);
  unset($a['category_id']);
  unset($a['created_at']);
  unset($a['tags']);
  unset($a['meta']);  
  return $a;
}, $articles);

echo json_encode($result);
?>
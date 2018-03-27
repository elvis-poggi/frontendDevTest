<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset-UTF-8");

// TODO
// - fetch from http://18.195.225.57/articles.php
// - remove unnecessary fields from JSON
// - serve filtered object as JSON

$result = array();
echo json_encode($result);

?>
<?php
include_once 'keys.php';

header('Content-Type: application/json');
$city = "Smyrna";
$state = "DE";
$json;

if(isset($_GET['city'])) {
  if(strlen($_GET['city']) > 0) {
    $city = $_GET['city'];
  }
}

if(isset($_GET['state'])) {
  if(strlen($_GET['state']) == 2) {
    $state = $_GET['state'];
  }
}

if(isset($_GET['current_conditions'])) {
  $json = file_get_contents('http://api.wunderground.com/api/'.$wunderground_key.'/conditions/q/'.$state.'/'.$city.'.json');
}

if(isset($_GET['10_day'])) {
  $json = file_get_contents('http://api.wunderground.com/api/'.$wunderground_key.'/forecast10day/q/'.$state.'/'.$city.'.json');
}

echo $json;

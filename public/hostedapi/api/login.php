<?php
require_once('./includes/functions.inc.php');

$requested = explode('/', $_SERVER['REQUEST_URI']);

switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":
		// expected input is JSON in following format:
		// {"login": "Mark", "password": "30"} 
		$postedJSON = file_get_contents('php://input');
		$decodedInput = json_decode($postedJSON, TRUE); //convert JSON to array
		// show posted data for debugging
		// print_r($decodedInput);
		// some more input checks go here...
		// call login function
		echo login($decodedInput['login'], $decodedInput['password']);
        break;
}

?>

<?php
require_once('./includes/functions.inc.php');

$requested = explode('/', $_SERVER['REQUEST_URI']);

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
		if(isset($_GET['token']) && !empty($_GET['token'])){
			echo getPartnerStyle(tokenUserPartner($_GET['token']));
		} else {
			echo getStyle($requested[sizeof($requested)-1]);
		}
        break;
    case "POST":
		$postedJSON = file_get_contents('php://input');
		$decodedInput = json_decode($postedJSON, TRUE); //convert JSON to array
		// show posted data for debugging
		// print_r($decodedInput);
		// some more input checks go here...
		echo updateStyle($decodedInput);
        break;
}
?>

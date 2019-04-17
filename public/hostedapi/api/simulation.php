<?php
require_once('./includes/functions.inc.php');

$requested = explode('/', $_SERVER['REQUEST_URI']);

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
		// print_r($_GET);
		// expected input: in following format:
		// token=55bc688b9dd2c90b8445affe3bd214a2059bdb98457fe16850
		// some more input checks go here...
		if(isset($_GET['token']) && !empty($_GET['token'])){
			// call function to retrieve assosiated userID
			$userID = token_user($_GET['token']);
			echo getUserSimulations($userID);
		} else {
		// get list of all simulations
			echo getSimulations();
		}

        break;
}

?>

<?php
require_once('./includes/functions.inc.php');

$requested = explode('/', $_SERVER['REQUEST_URI']);

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
		echo getPartners();
        break;
}

?>

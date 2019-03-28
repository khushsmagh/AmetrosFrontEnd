<?php

function title(){
	// function to output the page title
	$requested = explode('/', $_SERVER['REQUEST_URI']);
	switch ($requested[sizeof($requested)-1]) {
    case "test.php":
        echo "test page";
        break;
    case "index.php":
        echo "index";
        break;
    case "userpage.php":
        echo "user page";
        break;
}
	echo " - Ametros";
}
?>

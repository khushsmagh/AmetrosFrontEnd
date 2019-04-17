<?php
require_once('config.php');

$connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
	if ( mysqli_connect_errno() ) {
		die( mysqli_connect_error() );
	}

?>
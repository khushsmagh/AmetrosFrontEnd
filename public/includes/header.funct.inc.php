<?php
require_once("title.inc.php");

require_once('includes/colors.class.php');

$partnerID = 1; // this value will be retreived from the DB based on the logged in user

$colors = new Colors($partnerID);

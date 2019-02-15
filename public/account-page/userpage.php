<?php
require_once('../includes/colors.class.php');

$partnerID = 1; // this value will be retreived from the DB based on the logged in user

$colors = new Colors($partnerID);
?>

Welcome to the userpage for partnerID <?php echo $partnerID; ?> <br>
color one is: <?php echo $colors->color1(); ?> <br>
color two is: <?php echo $colors->color2(); ?> <br>
color three is: <?php echo $colors->color3(); ?> <br>
color four is: <?php echo $colors->color4(); ?> <br>


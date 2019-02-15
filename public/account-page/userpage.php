<?php

require_once('../includes/colors.class.php');

$partnerID = 1; // this value will be retreived from the DB based on the logged in user

$colors = new Colors($partnerID);
?>

Welcome to the userpage for partnerID <?php echo $partnerID; ?> <br>
<div style="color:<?php echo $colors->color1(); ?>;">color one is: <?php echo $colors->color1(); ?> </div> 
<div style="color:<?php echo $colors->color2(); ?>;">color two is: <?php echo $colors->color2(); ?> </div> 
<div style="color:<?php echo $colors->color3(); ?>;">color three is: <?php echo $colors->color3(); ?> </div> 
<div style="color:<?php echo $colors->color4(); ?>;">color four is: <?php echo $colors->color4(); ?> </div> 


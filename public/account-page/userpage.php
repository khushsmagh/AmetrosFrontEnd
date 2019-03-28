<?php

require_once('../includes/colors.class.php');

$partnerID = 1; // this value will be retreived from the DB based on the logged in user

$colors = new Colors($partnerID);
?>

Welcome to the userpage for partnerID <?php echo $partnerID; ?> <br>
<div style="color:<?php $colors->color1(); ?>;">color one is: <?php $colors->color1(); ?> </div> 
<div style="color:<?php $colors->color2(); ?>;">color two is: <?php $colors->color2(); ?> </div> 
<div style="color:<?php $colors->color3(); ?>;">color three is: <?php $colors->color3(); ?> </div> 
<div style="color:<?php $colors->color4(); ?>;">color four is: <?php $colors->color4(); ?> </div> 


<?php require_once("header.funct.inc.php");?>

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title><?php title(); ?></title>
  <meta name="description" content="">
  <meta name="author" content="class of 2019">

  <link rel="stylesheet" href="css/styles.css?v=1.0">
  <style type="text/css">
	.tableHeader{
		background-color: 	<?php $colors->color1(); ?>;
		color: 				<?php $colors->color4(); ?>;
		}
	.tableRowEven{
		background-color: 	<?php $colors->color2(); ?>;
		color: 				<?php $colors->color3(); ?>;
		}
	.tableRowOdd{
		background-color: 	<?php $colors->color3(); ?>;
		color: 				<?php $colors->color2(); ?>;
		}
  </style>
</head>

<body>

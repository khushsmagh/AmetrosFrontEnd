<?php
	header('Content-type: text/css; charset:UTF-8');

	require_once('../../includes/colors.class.php');

	$partnerID = 2; // this value will be retreived from the DB based on the logged in user

	$colors = new Colors($partnerID);
	
?>
/* Color Settings */

/* Top Nav-bar */

    /* Background Color */
    .custom-nav {
        background-image: linear-gradient(to left, <?php $colors->color1(); ?>, <?php $colors->color2(); ?>);
    }

    /* Nav-bar Icons color */
    i.fas,
    i.fab {
    color: rgb(255, 255, 255);
    }

    /* Search Icon */
    i.fa-search {
        color: rgb(33, 37, 41);
    }

    /* Badge Counter */
    .badge-value {
        color: rgb(33, 37, 41);
        }

/* Main Content */

    /* Content Background */
    #content {
        background-image: linear-gradient(rgb(233, 236, 239), rgb(233, 236, 239));
    } 

    /* Button color */
    .custom-btn {
        background-image: linear-gradient(rgb(249, 195, 32), rgb(249, 195, 32));
        color:linear-gradient(rgb(33, 37, 41),rgb(33, 37, 41));
    }

    /* Simulations Card */
        /* Card Header Background */
        div.cd-header {
            background-image: linear-gradient(rgb(149, 36, 208), rgb(149, 36, 208));
        }

        /* Card Header Font */
        div.cd-header h4 {
            color: rgb(255, 255, 255);
        }

        /* Card Body Background */
        div.cd-body {
            background-image: linear-gradient(rgb(248, 249, 250), rgb(248, 249, 250));
        }

        /* Table Background */
        tbody.tb-body tr td{
            background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255));
            color: rgb(33, 37, 41);
        }

        /* Hovering color */
        div.table-responsive table tbody td.table-data:hover {
            background-image: linear-gradient(rgb(149, 36, 208), rgb(132, 46, 178));
            color: rgb(255, 255, 255);
        }

        /* Table Font Color */
        div.cd-body p {
            color: darkblue;
        }

        /* Module Label Font Color */
        div.cd-body h4 {
            color:darkolivegreen
        }

/* Sidebar config */

    /* Background Color */
    .custom-sidebar {
        background-image: linear-gradient(to left, rgb(132, 46, 178), rgb(112, 26, 158));
    }

    /* Icon Color */
    i.fas.fa-fw.icon-sidebar  {
        color: rgb(255, 255, 255);
    }

    /* Font Color */
    .custom-sidebar span {
        color: rgb(255, 255, 255);
    }



/* Footer */
    .sticky-footer{
        background-image: linear-gradient(to left,rgb(245, 0, 39), rgb(132, 46, 178));
    }

    #copyright {
        color: whitesmoke;
    }

/* Font Type */

    .custom-font {
        font-family: Arial, Helvetica, sans-serif;
    }
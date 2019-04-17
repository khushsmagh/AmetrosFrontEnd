<?php

function register($decodedInput){
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);
		$qry = $pdo->prepare("INSERT INTO users (userName, userLogin, userEmail, userPassword, userPartner)
										VALUES(?, ?, ?, ?, ?)");
		$qry->execute(	[$decodedInput['name'], 
						$decodedInput['login'],
						$decodedInput['email'],
						$decodedInput['password'],
						$decodedInput['partner']]);
		if(!$qry->rowCount()){
			$error['message'] = "create user failed";
			exit(json_encode($error));
		}
		$success['message'] = "user ". $decodedInput['login'] ." has been created";
		return json_encode($success);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}	
}

function login($userLogin, $password) {
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT userID, userName, userAdmin FROM users WHERE userLogin = ? AND userPassword = ? LIMIT 1");
		$qry->execute([$userLogin, $password]);
		$arr = $qry->fetch(PDO::FETCH_NUM);
		if(!$arr){
		$error['Status'] = "error";
		 exit(json_encode($error));
		 }
		// found user
		list($id, $name, $admin) = $arr;
		$qry = null;

		// user/password combination found, lets create a login token
		$token = bin2hex(openssl_random_pseudo_bytes(25));
		// store the generated token in the database
		$qry = $pdo->prepare("UPDATE users SET userToken = ? WHERE userID = ?");
		$qry->execute([$token, $id]);
		$qry = null;

		$loggedin['token'] = $token;
		$loggedin['isadmin'] = $admin;
		return json_encode($loggedin);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function getStyle($partnerName) {
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT * FROM partners WHERE partnerName = ? LIMIT 1");
		$qry->execute([$partnerName]);
		$arr = $qry->fetch(PDO::FETCH_NUM);
		if(!$arr){
		$error['Status'] = "error";
		 exit(json_encode($error));
		 }
		// found partner
		list($id, $name, $color1, $color2, $color3, $color4, $color5, $color6, $url, $logo, $description) = $arr;
		$qry = null;

		$colors['color1']		= $color1;
		$colors['color2']		= $color2;
		$colors['color3']		= $color3;
		$colors['color4']		= $color4;
		$colors['color5']		= $color5;
		$colors['color6']		= $color6;		
		$partner['name'] 		= $name;
		$partner['description'] = $description;
		$partner['logoUrl'] 	= $logo;
		$partner['styles']		= $colors;
		$partner['url'] 		= $url;
		$partner['Status']		= "success";
		
		return json_encode($partner);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function updateStyle($decodedInput) {
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);
		$qry = $pdo->prepare("UPDATE partners SET 	partnerName 		= ?, 
													partnerDescription 	= ?, 
													partnerURL 			= ?, 
													partnerLogoURL 		= ?, 
													partnerColor1 		= ?, 
													partnerColor2 		= ?, 
													partnerColor3 		= ?, 
													partnerColor4 		= ?, 
													partnerColor5 		= ?, 
													partnerColor6 		= ?
											WHERE 	partnerID = ?");
		$qry->execute(	[$decodedInput['name'], 
						$decodedInput['description'],
						$decodedInput['url'],
						$decodedInput['logoUrl'],
						$decodedInput['styles']['color1'],
						$decodedInput['styles']['color2'],
						$decodedInput['styles']['color3'],
						$decodedInput['styles']['color4'],
						$decodedInput['styles']['color5'],
						$decodedInput['styles']['color6'],
						tokenUserPartner($decodedInput['token'])]);
		if(!$qry->rowCount()){
		$error['message'] = "update failed";
		 exit(json_encode($error));
		 }
		$success['message'] = "style for ". $decodedInput['name'] ." has been updated";
		return json_encode($success);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function getPartnerStyle($partnerID) {
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT * FROM partners WHERE partnerID = ? LIMIT 1");
		$qry->execute([$partnerID]);
		$arr = $qry->fetch(PDO::FETCH_NUM);
		if(!$arr){
		$error['Status'] = "error";
		 exit(json_encode($error));
		 }
		// found partner
		list($id, $name, $color1, $color2, $color3, $color4, $color5, $color6, $url, $logo, $description) = $arr;
		$qry = null;

		$colors['color1']		= $color1;
		$colors['color2']		= $color2;
		$colors['color3']		= $color3;
		$colors['color4']		= $color4;
		$colors['color5']		= $color5;
		$colors['color6']		= $color6;
		
		$partner['name'] 		= $name;
		$partner['description'] = $description;
		$partner['logoUrl'] 	= $logo;
		$partner['styles']		= $colors;
		$partner['url'] 		= $url;
		$partner['Status']		= "success";
				
		return json_encode($partner);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function token_user($token){
	// check if the token is valid and return the corresponding user ID
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT userID, userName FROM users WHERE userToken = ? LIMIT 1");
		$qry->execute([$token]);
		$arr = $qry->fetch(PDO::FETCH_NUM);
		if(!$arr){
		$error['error'] = "error";
		 exit(json_encode($error));
		}
		// found user
		list($id, $name) = $arr;
		$qry = null;

		return $id;	
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function tokenUserPartner($token){
	// check if the token is valid and return the corresponding partner ID
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT userPartner FROM users WHERE userToken = ? LIMIT 1");
		$qry->execute([$token]);
		$arr = $qry->fetch(PDO::FETCH_NUM);
		if(!$arr){
		$error['Status'] = "error";
		 exit(json_encode($error));
		}
		// found user
		list($id) = $arr;
		$qry = null;

		return $id;	
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function getUserSimulations($user){
	// get all simulations for a user
	require_once('config.php');
	try	{
		$pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT simid, name, startdate, enddate, status, avgscore, prgM1, prgM2, prgM3, prgM4, prgM5, prgM6 FROM userSimulations WHERE userid = ?");
		$qry->execute([$user]);

		$arr = $qry->fetchAll(PDO::FETCH_ASSOC);
		if(!$arr) exit(json_encode('error'));
		// found simulations
		$qry = null;
		
		$simulations = [];

		foreach($arr as $sim){
			$thisSim['sim-id'] = $sim['simid'];
			$thisSim['name'] = $sim['name'];
			$thisSim['start-date'] = $sim['startdate'];
			$thisSim['end-date'] = $sim['enddate'];
			$thisSim['status'] = $sim['status'];
			$thisSim['avg-score'] = $sim['avgscore'];
			$thisSim['prg-modules'] = array($sim['prgM1'], $sim['prgM2'], $sim['prgM3'], $sim['prgM4'], $sim['prgM5'], $sim['prgM6'], );

			array_push($simulations, $thisSim); 
		}
		
		return json_encode($simulations);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function getSimulations(){
	// get all simulations
	require_once('config.php');
	try	{
		$pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT * FROM simulations");
		$qry->execute();
		$arr = $qry->fetchAll(PDO::FETCH_ASSOC);
		if(!$arr) exit(json_encode('error'));
		// found simulations
		$qry = null;
				
		return json_encode($arr);
		//return json_encode($simulation);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}

function getPartners() {
	require_once('config.php');
	try	{
		$pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);

		$qry = $pdo->prepare("SELECT partnerID, partnerName FROM partners");
		$qry->execute();
		$arr = $qry->fetchAll(PDO::FETCH_ASSOC);
		if(!$arr){
		$error['Status'] = "error";
		 exit(json_encode($error));
		 }
		// found partner
		list($id, $name, $color1, $color2, $color3, $color4, $color5, $color6, $url, $logo, $description) = $arr;
		$qry = null;

				
		return json_encode($arr);
	}
	catch (PDOException $e) {
      die( $e->getMessage() );
	}
}


?>

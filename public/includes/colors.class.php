<?php
//require_once('includes/query.class.php');

class Colors {
	
	protected $color1;
	protected $color2;
	protected $color3;
	protected $color4;	
	
	function __construct($partnerID) {

		if($partnerID == 1){
			$this->color1 = "Blue";
			$this->color2 = "Light Blue";		
			$this->color3 = "Dark Blue";
			$this->color4 = "White";
		}else{
			$this->color1 = "Red";
			$this->color2 = "Light Red";		
			$this->color3 = "Dark Red";
			$this->color4 = "White";			
		}
	}
	
	public function color1() {
		return $this->color1;
	}
	
	public function color2() {
		return $this->color2;
	}			

	public function color3() {
		return $this->color3;
	}			

	public function color4() {
		return $this->color4;
	}			
}

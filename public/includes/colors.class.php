<?php
//require_once('includes/query.class.php');

class Colors {
	
	protected $color1;
	protected $color2;
	protected $color3;
	protected $color4;	
	
	function __construct($partnerID) {

		if($partnerID == 1){
			$this->color1 = "#22f";
			$this->color2 = "#77f";		
			$this->color3 = "#333";
			$this->color4 = "#777";
		}else{
			$this->color1 = "#f22";
			$this->color2 = "#f77";		
			$this->color3 = "#333";
			$this->color4 = "#777";			
		}
	}
	
	public function color1() {
		echo $this->color1;
	}
	
	public function color2() {
		echo $this->color2;
	}			

	public function color3() {
		echo $this->color3;
	}			

	public function color4() {
		echo $this->color4;
	}			
}

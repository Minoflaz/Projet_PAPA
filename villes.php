<?php

require_once 'ville.php';

class Villes {

	//Liste de villes
	private $villes;

	public function __construct() {

		$this->villes = array();
	}

	//Return all cities matching the name given in parameter
	public function getVillesByName($nom) {

		$matching = array();

		foreach ($this->villes as $ville) {

			if($nom == "") {

				$matching[] = $ville;
			}

			else if (preg_match('/'.preg_quote($nom).'/i', $ville->getName())) {

				$matching[] = $ville;
			}
		}

		return $matching;

	}

    public function setVilles($array) {

        $this->villes = $array;
    }

    public function getVilles() {

        return $this->villes;
    }

	public function addVille($ville) {

		$this->villes[] = $ville;
	}


	
}


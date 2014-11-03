<?php

$result = array(
	0 => array(
		"name" => "Will",
		"age"  => "30"
	),
	1 => array(
		"name" => "Laura",
		"age"  => "26"
	),
	2 => array(
		"name" => "Laura",
		"age"  => "26"
	)
);



header('Content-Type: application/json');
echo json_encode($result);


<?php

// personal email
$email_to = "hannah.pham@gmail.com";

// notable pages
$home = "index.html";

// load variables
$name = $_REQUEST['name'];
$email_from = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

// checking spam bots

function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// redirecting them if try to access script
if (!isset($_REQUEST['email'])) {
header( "Location: $home" );
}

// if fields are empty
elseif (empty($name) || empty($email_from) || empty($subject) || empty($message)) {
header( "Location: $home" );
}

// send email

else {
	mail($email_to, $subject, $message);
	header("Location: $home");
}

?>
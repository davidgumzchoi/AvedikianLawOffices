<?php
	if(empty($_POST['name']) ||
	empty($_POST['email']) ||
	empty($_POST['number']) ||
	empty($_POST['case']) ||
	empty($_POST['message']) ||
	!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo "No arguments Provided!";
		return false;
	}
	$name = $_POST['name'];
	$email_address = $_POST['email'];
	$number = $_POST['number'];
	$case = $_POST['case'];
	$message = $_POST['message'];
	$to = 'info@avelaw.com';
	$email_subject = 'Contact form submitted by: $name';
	$email_body = 'You have received a new message. \n\n'. 'Here are the details:\n \nName: $name \n '. 'Email: $email_address\n Number: $number\n Type of Case: $case\n Message \n $message';
	$headers = 'From: Avedikian Law Offices Contact Form\n';
	$headers .= 'Reply-To: $email_address';	
	mail($to,$email_subject,$email_body,$headers);
	return true;
?>
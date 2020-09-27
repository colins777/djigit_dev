<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

//	foreach ( $_GET as $key => $value ) {
//		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
//			$message .= "
//			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
//			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
//			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
//		</tr>
//		";
//	}
//}

    	foreach ( $_GET as $key => $value ) {
            if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
                $message .= "<b>".$key."</b>: ".$value."%0A";
            }
        }
    $fp=fopen("https://api.telegram.org/bot1320764875:AAGKeMPYbeRVpL8nRrxyLSLNfS0nj9uYt6I/sendMessage?chat_id=382549029&parse_mode=html&text=$message","r");
    return true;
}



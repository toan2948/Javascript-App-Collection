<?php
session_start();
if(!isset($_SESSION['alter'])) {
	//Headers werden VOR jeglichen Inhalt geschickt: Weiterleitung funktioniert nur, wenn noch keine Ausgaben gemacht worden sind (auch keine Warnungen)
	header('Location:index.php');
	exit;
} 
else if($_SESSION['alter_geprueft']<18) {
	header('Location:minderjaehrige.php');
	exit;
}
echo 'i am older than 20';
?>

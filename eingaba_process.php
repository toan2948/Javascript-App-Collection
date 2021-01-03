<?php

session_start();


$alter = isset($_POST['alter']) ? stripcslashes($_POST['alter']) :null;
if($alter!==null){
    echo 'ich habe bekommen <br>';
    echo htmlentities($alter,ENT_COMPAT);
} else if(empty($alter)){
    echo 'Zeichenkette war leer, oder null, oder false, oder [], oder 0';
}
$_SESSION['alter']=$alter;

if($alter>20){
    header('Location:20.php');
    exit;
}
else{
    header('Location:19.php');
    exit;
}
?>
<?php

$marks = 75;


// if
if ($marks >= 40) {
    echo "Pass<br>";
}


// if else
if ($marks >= 80) {
    echo "Grade A<br>";
} else {
    echo "Below Grade A<br>";
}


// if else ladder
if ($marks >= 90) {
    echo "A+";
} elseif ($marks >= 75) {
    echo "A";
} elseif ($marks >= 60) {
    echo "B";
} else {
    echo "Fail";
}


echo "<br><br>";


// switch
$day = 2;


switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    case 3:
        echo "Wednesday";
        break;
    default:
        echo "Invalid Day";
}

?>
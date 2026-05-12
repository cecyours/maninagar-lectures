<?php

// for loop 
$i = 0;
for ($i = 0; $i < 10; $i++) {
    echo "for: $i<br>";
}

echo "</br> </br> </br>";


// while loop
$i = 1;
while ($i <= 3) {
    echo "While: $i<br>";
    $i++;
}

echo "</br> </br> </br>";


// do while loop

$j = 1;

do {
    echo "Do While: $j<br>";
    $j++;
} while ($j <= 3);

echo "</br> </br> </br>";


// for loop
for ($k = 1; $k <= 3; $k++) {
    echo "For: $k<br>";
}

echo "</br> </br> </br>";


// foreach loop
$colors = ["Red", "Blue", "Green"];

foreach ($colors as $c) {
    echo "Color: $c<br>";
}

?>
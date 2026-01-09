<?php
$a = 10;
$b = 3;


// Arithmetic Operators
echo "Addition: " . ($a + $b) . "<br>";
echo "Subtraction: " . ($a - $b) . "<br>";
echo "Multiplication: " . ($a * $b) . "<br>";
echo "Division: " . ($a / $b) . "<br>";
echo "Modulus: " . ($a % $b) . "<br><br>";


// Relational Operators
echo "a > b: ";
var_dump($a > $b);
echo "<br>";
echo "a == b: ";
var_dump($a == $b);
echo "<br><br>";


// Logical Operators
$x = true;
$y = false;


echo "AND: ";
var_dump($x && $y);
echo "<br>";
echo "OR: ";
var_dump($x || $y);
echo "<br><br>";


// Bitwise Operators
echo "Bitwise AND: " . ($a & $b) . "<br><br>";


// Assignment Operators
$c = 5;
$c += 2;
echo "Assignment += : $c<br><br>";


// Conditional (Ternary) Operator
echo ($a > $b) ? "A is greater" : "B is greater";
echo "<br><br>";


$arr1 = [1, 2];
$arr2 = [3, 4];

$result = $arr1 + $arr2;
print_r($result);

?>

<?php
// BUILT-IN FUNCTION
echo "String Length: " . strlen("Hello PHP") . "<br>";
echo "Uppercase: " . strtoupper("php") . "<br>";


// USER-DEFINED FUNCTION
function add($a, $b)
{
    return $a + $b;
}


echo "Addition: " . add(5, 10) . "<br>";


// FUNCTION HEADER & BODY
// function name(parameters) { body }
function greet($name)
{
    echo "Hello $name";
}


greet("Student");


?>
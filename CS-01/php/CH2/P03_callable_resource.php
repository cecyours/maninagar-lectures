<?php

// callable func
function greet(){
    return "Hello Harshpreet";
}


$myfunc = "greet";
echo $myfunc();


//resource (file handling)

$file = fopen("demo.txt", "w");
fwrite($file, "Welcomr to PHP");
fclose($file);

echo "<br> File created succ";


?>
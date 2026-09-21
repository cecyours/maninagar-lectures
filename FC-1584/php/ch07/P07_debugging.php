<?php

$array = ["name" => "Tanvi", "age" => 22];

// Debugging array
var_dump($array);
print_r($array);

// Backtrace example
function test()
{
    debug_print_backtrace();
}
test();

?>
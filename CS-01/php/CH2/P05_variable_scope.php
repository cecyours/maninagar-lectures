<?php

$x = 60;

function testscope($name){
    global $x; //global
    $y = 10; //local

    echo "hello $name <br>";
    echo "global x = $x <br>";
    echo "local y = $y<br>";

}

testscope("harshpreet");


//static varibales

function counter(){
    static $count = 0;
    $count++;

    echo "Count: $count<br>";

}

counter();
counter();
counter();
counter();
counter();
counter();
counter();
?>
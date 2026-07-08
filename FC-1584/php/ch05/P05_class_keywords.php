<?php
class Demo
{
    const SITE = "cec.in"; // class constant
    static $count = 0; // static


    function show()
    {
        self::$count++;
        echo "Count: " . self::$count . "<br>";
        echo "Site: " . self::SITE . "<br>";
    }
}


$obj = new Demo();
$obj->show();
$obj->show();

?>
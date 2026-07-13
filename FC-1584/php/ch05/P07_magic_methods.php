<?php
class Test
{
    public function __construct()
    {
        echo "Construct<br>";
    }


    public function __destruct()
    {
        echo "Destruct<br>";
    }


    public function __call($name, $args)
    {
        echo "Calling undefined method: $name";
    }
}


$t = new Test();
$t->demo();

?>
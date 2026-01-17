<?php

// ABSTRACT CLASS
abstract class Bank
{
    abstract function interest();
}


class SBI extends Bank
{
    function interest()
    {
        echo "SBI Interest 5%<br>";
    }
}


// INTERFACE
interface Shape
{
    public function area();
}


class Square implements Shape
{
    function area()
    {
        echo "Area of Square<br>";
    }
}


$obj1 = new SBI();
$obj1->interest();


$obj2 = new Square();
$obj2->area();

?>
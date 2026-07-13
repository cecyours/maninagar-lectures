<?php
// ANONYMOUS CLASS
$obj = new class {
    function msg()
    {
        echo "Anonymous Class<br>";
    }
};
$obj->msg();


// STATIC POLYMORPHISM (Method Overloading style)
class Calc
{
    function add($a, $b, $c = 0)
    {
        return $a + $b + $c;
    }
}


$c = new Calc();
echo "Add: " . $c->add(5, 5) . "<br>";


// DYNAMIC POLYMORPHISM (Method Overriding)
class ParentClass
{
    function show()
    {
        echo "Parent Class<br>";
    }
}


class ChildClass extends ParentClass
{
    function show()
    {
        echo "Child Class<br>";
    }
}


$obj = new ChildClass();
$obj->show();

?>
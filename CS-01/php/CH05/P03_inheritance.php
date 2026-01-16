<?php
// SINGLE INHERITANCE
class A
{
    function showA()
    {
        echo "Class A<br>";
    }
}
class B extends A
{
    function showB()
    {
        echo "Class B<br>";
    }
}


// MULTI-LEVEL INHERITANCE
class C extends B
{
    function showC()
    {
        echo "Class C<br>";
    }
}


// HIERARCHICAL INHERITANCE
class D extends A
{
    function showD()
    {
        echo "Class D<br>";
    }
}


$obj = new C();
$obj->showA();
$obj->showB();
$obj->showC();

?>
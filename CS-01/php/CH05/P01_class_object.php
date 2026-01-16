<?php
// CLASS & OBJECT
class Student
{
    public $name; // member variable


    public function showName()
    { // member function
        echo "Name: " . $this->name;
    }
}   


$obj = new Student();
$obj->name = "Tanvi";
$obj->showName();

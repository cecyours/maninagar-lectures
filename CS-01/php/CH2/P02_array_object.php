<?php

$subjects = array("PHP", "HTML", "CSS");

echo "Subject: <br>";

foreach($subjects as $subject) {
    echo $subject. "<br>";
}


class Student {

    public $name;
    public $course;

}

$s1 = new Student();
$s2 = new Student();
$s3 = new Student();

$s1->name = "Harshpreet";
$s1->course = "php";

$s2->name = "tanvi";
$s2->course = "java";

$s3->name = "janvi";
$s3->course = "HTML";


echo "<br>Student name: ". $s1->name;
echo "<br>Course: ". $s1->course;


echo "<br>Student name: ". $s2->name;
echo "<br>Course: ". $s2->course;


echo "<br>Student name: ". $s3->name;
echo "<br>Course: ". $s3->course;

?>
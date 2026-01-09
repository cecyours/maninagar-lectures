<?php
// NUMERIC ARRAY
$numbers = [10, 20, 30];
echo "Numeric Array:<br>";
foreach ($numbers as $n) {
    echo $n . "<br>";
}


// ASSOCIATIVE ARRAY
// $student = [
//     "name" => "Yug",
//     "course" => "PHP",
//     "age" => 21
// ];

$students = [
    [
        "name" => "Yug",
        "course" => "PHP",
        "age" => 21
    ],
    [
        "name" => "Aditya",
        "course" => "PHP",
        "age" => 22
    ]
];

echo "<br>Associative Array:<br>";
// foreach ($student as $key => $value) {
//     echo $key . " : " . $value . "<br>";
// }


echo "<br>Students Data:<br>";
foreach ($students as $student) {
    foreach ($student as $key => $value) {
        echo $key . " : " . $value . "<br>";
    }
    echo "<hr>";
}

// MULTI-DIMENSIONAL ARRAY
$marks = [
    ["Math", 80],
    ["Science", 85],
    ["PHP", 90]
];


echo "<br>Multi-Dimensional Array:<br>";
foreach ($marks as $m) {
    echo $m[0] . " = " . $m[1] . "<br>";
}

?>

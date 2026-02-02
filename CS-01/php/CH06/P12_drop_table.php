<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DROP TABLE MyGuests";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests dropped successfully";
} else {
    echo "Error dropping table: " . $conn->error;
}

$conn->close();

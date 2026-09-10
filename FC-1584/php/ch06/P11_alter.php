<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "ALTER TABLE MyGuests ADD email VARCHAR(100)";

if ($conn->query($sql) === TRUE) {
    echo "Column added successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>


<!-- $sql = "ALTER TABLE MyGuests MODIFY firstname VARCHAR(100)";
$sql = "ALTER TABLE MyGuests CHANGE lastname surname VARCHAR(50)";
$sql = "ALTER TABLE MyGuests DROP email";
$sql = "ALTER TABLE MyGuests RENAME TO Guests"; -->

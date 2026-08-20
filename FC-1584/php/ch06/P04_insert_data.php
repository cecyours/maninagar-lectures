<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vikash";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests ( firstname, lastname, email ) VALUES 
( 'Vikash', 'Hello', 'vikash@gmail.com'),
('janvi', 'patel', 'janvi@gmail.com'),
('het', 'patel', 'het@gmail.com')";

if ($conn->multi_query($sql) === TRUE) {
    echo "New records inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email) VALUES
('Harshpreet', 'hello', 'harshpreet@gmail.com'),
('janvi', 'patel', 'janvi@gmail.com'),
('het', 'patel', 'het@gmail.com')";

if ($conn->multi_query($sql) === TRUE) {
  echo "New records inserted successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
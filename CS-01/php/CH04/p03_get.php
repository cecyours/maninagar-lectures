<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Method Form</title>
</head>

<body>
    <h2>GET Method Form</h2>
    <form action="" method="get">
        Name: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        Age: <input type="number" name="age" min="1"><br><br>
        Gender:
        <input type="radio" name="gender" value="Male" checked> Male
        <input type="radio" name="gender" value="Female"> Female<br><br>
        Message: <textarea name="message" rows="4" cols="30"></textarea><br><br>
        <input type="submit" value="Submit">
    </form>

    <?php
    if (isset($_GET['name'])) {
        $name = $_GET['name'] ?? '';
        $email = $_GET['email'] ?? '';
        $age = $_GET['age'] ?? '';
        $gender = $_GET['gender'] ?? '';
        $message = $_GET['message'] ?? '';

        echo "<h3>Your Submitted Details:</h3>";
        echo "Name: $name<br>";
        echo "Email: $email<br>";
        echo "Age: $age<br>";
        echo "Gender: $gender<br>";
        echo "Message: $message<br>";
    }
    ?>

</body>

</html>
<!DOCTYPE html>
<html>
<head>
    <title>POST Method Form</title>
</head>

<body>
    <h3>POST Method Form</h3>

    <form method="post">
        Name: <input type="text" name="name"><br><br>

        Email: <input type="email" name="email"><br><br>

        Password: <input type="password" name="password"><br><br>

        Gender:
        <input type="radio" name="gender" value="Male"> Male
        <input type="radio" name="gender" value="Female"> Female
        <br><br>

        Course:
        <select name="course">
            <option value="">Select Course</option>
            <option value="PHP">PHP</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
        </select>
        <br><br>

        Message:<br>
        <textarea name="message"></textarea>
        <br><br>

        <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        echo "<h3>Form Data:</h3>";
        echo "Name: " . $_POST['name'] . "<br>";
        echo "Email: " . $_POST['email'] . "<br>";
        echo "Password: " . $_POST['password'] . "<br>";
        echo "Gender: " . $_POST['gender'] . "<br>";
        echo "Course: " . $_POST['course'] . "<br>";
        echo "Message: " . $_POST['message'];
    }
    ?>

</body>
</html>

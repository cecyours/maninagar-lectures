<!DOCTYPE html>
<html>

<body>
    <h3>Form Validation (REQUEST)</h3>
    <form method="post">
        Username: <input type="text" name="username">
        <input type="submit">
    </form>


    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_REQUEST['username'])) {
            echo "Username is required";
        } else {
            echo "Welcome " . $_REQUEST['username'];
        }
    }
    ?>
</body>

</html>
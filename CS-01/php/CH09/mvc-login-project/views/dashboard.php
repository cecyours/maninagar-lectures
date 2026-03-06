<!DOCTYPE html>
<html>

<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <div class="box">
        <h2>Welcome <?php echo $_SESSION['user']['name']; ?></h2>
        <a href="index.php?action=logout">Logout</a>
    </div>
</body>

</html>
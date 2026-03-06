<!DOCTYPE html>
<html>

<head>
    <title>Signup</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <div class="box">
        <h2>Signup</h2>
        <form method="POST" action="index.php?action=register">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Signup</button>
            <p>Already have account? <a href="index.php?action=login">Login</a></p>
        </form>
    </div>
</body>

</html>
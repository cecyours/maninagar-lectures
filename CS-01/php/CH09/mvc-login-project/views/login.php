<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <div class="box">
        <h2>Login</h2>
        <form method="POST" action="index.php?action=authenticate">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
            <p>No account? <a href="index.php?action=signup">Signup</a></p>
        </form>
    </div>
</body>

</html>
<?php
require_once __DIR__ . '/src/User.php';
require_once __DIR__ . '/src/functions.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = sanitizeInput($_POST['username']);
    $password = sanitizeInput($_POST['password']);

    $user = new User();
    if ($user->login($username, $password)) {
        $_SESSION['logged_in'] = true;
        header("Location: dashboard.php");
        exit;
    } else {
        $error = "Invalid username or password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            background-color: #f0f8ff; /* Light blue */
            color: #333;
            font-family: Arial, sans-serif;
        }

        .login-container {
            width: 300px;
            margin: auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .login-container input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border-radius: 4px;
            border: 1px solid #ccc;
        }

        .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #1e90ff; /* Light blue */
            border: none;
            color: white;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
        }

        .dashboard {
            display: flex;
            gap: 10px;
            padding: 20px;
        }

        .box {
            background-color: #e6f2ff; /* Light blue */
            padding: 20px;
            border-radius: 8px;
            flex: 1;
            text-align: center;
        }

    </style>
    <title>Login</title>
</head>
<body>
    <div class="login-container">
        <form method="post" action="index.php">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
    </div>
</body>
</html>

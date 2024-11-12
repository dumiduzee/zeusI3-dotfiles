<?php
session_start();
if (!isset($_SESSION['logged_in'])) {
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="public/assets/css/styles.css">
    <title>Dashboard</title>
</head>
<body>
    <div class="dashboard">
        <div class="box">Dialog</div>
        <div class="box">Mobitel</div>
        <div class="box">Hutch</div>
        <div class="box">Airtel</div>
        <div class="box">Fibre</div>
        <div class="box">SLT 4G</div>
    </div>
</body>
</html>

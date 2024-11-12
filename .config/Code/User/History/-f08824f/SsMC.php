<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="number" name="number" placeholder="Number">
        <button type="submit">Genarate</button>
    </form>
</body>
</html>


<?php

    $number = $_POST['number'];
    for($i=1; $i<13; $i++ ){
        echo "5 X {$i}  = {5*$i}" . "<br>";
    }

?>
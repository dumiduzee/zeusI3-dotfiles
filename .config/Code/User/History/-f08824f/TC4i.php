<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="get">
        <input type="text"  name="name" placeholder="Name"><br>
        <input type="pass" name="pass" placeholder="Password"><br>
        <button type="submit" >login</button>
    </form>
</body>
</html>


<?php

    echo $_GET["name"]["pass"];

?>
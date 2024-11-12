<!DOCTYPE html>
<html>
<head>
    <title>Insert Department</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h2>Insert New Department</h2>
    <form action="insert_dept_action.php" method="POST">
        <label>Department Name:</label>
        <input type="text" name="emp_dept" required><br>
        
        <label>Department Type:</label>
        <input type="text" name="dept_type" required><br>
        
        <label>Department Number:</label>
        <input type="number" name="emp_dept_no" required><br>
        
        <input type="submit" value="Insert">
    </form>
</body>
</html>

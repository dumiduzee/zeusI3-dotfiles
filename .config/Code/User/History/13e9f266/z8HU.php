<?php
include 'db_config.php';

$emp_dept = $_POST['emp_dept'];
$dept_type = $_POST['dept_type'];
$emp_dept_no = $_POST['emp_dept_no'];

$sql = "INSERT INTO EMP_DEPT (EMP_DEPT, DEPT_TYPE, EMP_DEPT_NO) VALUES ('$emp_dept', '$dept_type', $emp_dept_no)";
if ($conn->query($sql) === TRUE) {
    echo "<p>New department added successfully</p>";
} else {
    echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
}

$conn->close();
?>
<a href="index.php">Back to Home</a>

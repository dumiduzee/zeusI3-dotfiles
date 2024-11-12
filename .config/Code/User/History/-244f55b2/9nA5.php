<?php
require_once __DIR__ . '/../config/config.php';

class User {
    private $db;

    public function __construct() {
        $this->db = connectDB();
    }

    public function login($username, $password) {
        $stmt = $this->db->prepare("SELECT password FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($hashed_password);
            $stmt->fetch();
            if (password_verify($password, $hashed_password)) {
                return true;
            }
        }
        return false;
    }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $expected_email = "example@example.com";
    $expected_password = "123456";

    // Formdan gelen verileri al
    $email = $_POST["email"];
    $password = $_POST["password"];

    // E-posta ve şifre alanlarının dolu olduğunu ve beklenen değerlerle eşleştiğini kontrol et
   // if (!empty($email) && !empty($password) && $email == $expected_email && $password == $expected_password) {
   //     echo "Hoşgeldin G231210374!";
    //} else {
      //  echo "Bulunamadı. Lütfen geçerli bir e-posta ve şifre girin.";
    //}
}
?>

<?php
header("refresh:5;url=index.html");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            background-color: #f0f0f0;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .form-group button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .message {
            margin-top: 20px;
            padding: 10px;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $expected_email = "example@example.com";
            $expected_password = "123456";
            $email = $_POST["email"];
            $password = $_POST["password"];
            if (!empty($email) && !empty($password) && $email == $expected_email && $password == $expected_password) {
                echo '<div class="message">Hoşgeldin G231210374!</div>';
            } else {
                echo '<div class="message">Bulunamadı. Lütfen geçerli bir e-posta ve şifre girin.</div>';
            }
        }
        ?>
    </div>
</body>
</html>
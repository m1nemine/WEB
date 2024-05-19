
<?php
header("refresh:5;url=index.html");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&family=Freeman&family=IM+Fell+English+SC&family=Jaro:opsz@6..72&family=Limelight&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&family=Freeman&family=IM+Fell+English+SC&family=Jaro:opsz@6..72&family=Limelight&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Ubuntu+Sans:ital,wdth,wght@0,83.1,482;1,83.1,482&display=swap');
        body {
            background-color:  #675869f1;
        }

        .message {
            font-family: "Jaro", sans-serif;
            font-size:55px;
            text-align: center;
            margin-top: 210px;
            color:#e4e2b8f1;            
        }
    </style>
</head>
<body>
    
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $expected_email = "emine.boluk@ogr.sakarya.edu.tr";
            $expected_password = "123456";
            $email = $_POST["email"];
            $password = $_POST["password"];
            if (!empty($email) && !empty($password) && $email == $expected_email && $password == $expected_password) {
                echo '<div class="message">Hoşgeldiniz G231210374!</div>';
            } else {
                echo '<div class="message">Bulunamadı. Lütfen geçerli bir e-posta ve şifre girin.</div>';
            }
        }
        ?>

</body>
</html>
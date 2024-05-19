
<?php
header("refresh:5;url=index.html");
?>
<!DOCTYPE html>
<html>
<head>
    <title>İletişim</title>
    <style>
   @import url('https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&family=Freeman&family=IM+Fell+English+SC&family=Jaro:opsz@6..72&family=Limelight&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&family=Freeman&family=IM+Fell+English+SC&family=Jaro:opsz@6..72&family=Limelight&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Ubuntu+Sans:ital,wdth,wght@0,83.1,482;1,83.1,482&display=swap');
        body {
            font-family: "Jaro", sans-serif;
            background-color: #f5f5f5;
        }
        #table-container {
    width: 40%;
    margin: auto;
}
        .table {
           text-align: center;
            width: 100%;          
            border-collapse: collapse;
        }
        .table th, .table td {
            text-align: center;
            border: 3px solid #ddd;
            padding: 8px;
        }
        .table th {
            
            padding-top: 12px;
            padding-bottom: 12px;
            text-align:center;
            background-color: #4CAF50;
            color: white;
        }
        #basliklar {
            background-color: #f2f2f2;
        }
        #baslik{
            font-family: "Jaro", sans-serif;
            font-size:35px;
            text-align: center;
            margin-top: 100px;
            color:#e4e2b8f1; 
        
        }
</style>
</head>
<body>
    <h1 style="text-align: center; color:black;" id ="baslik">İletişim Bilgileriniz</h1>
    <div id="table-container">
    <table class="table">
        
        <tbody>
        <tr>
            <td id="basliklar">İsminiz</td>
            <td id="basliklar">

                <?php
                echo $_POST['isim'];
                ?>

            </td>
        </tr>

        <tr>
            <td id="basliklar">E-Mail</td>
            <td id="basliklar">
                <?php
                echo $_POST['mail'];
                ?>
            </td>
        </tr>

            <tr>
        <td id="basliklar">TC kimlik NO:</td>
        <td id="basliklar">
            <?php
            echo $_POST['range'];
            ?>
        </td>
    </tr>
            <tr>
                <td id="basliklar">Cinsiyetiniz</td>
                <td id="basliklar">
                    <?php
                    echo $_POST['radio2'];
                    ?>
                </td>
            </tr>


            <tr>
        <td id="basliklar">Doğum Tarihi</td>
        <td id="basliklar">
            <?php
            echo $_POST['date'];
            ?>
        </td>
    </tr>

    <tr>
        <td id="basliklar">Ülke</td>
        <td id="basliklar">
            <?php
            $option = $_POST['option'];
            if ($option == 'option1') {
                echo 'Türkiye';
            } elseif ($option == 'option2') {
                echo 'ABD';
            } elseif ($option == 'option3') {
                echo 'Almanya';
            }
            ?>
        </td>
    </tr>
    
    <tr>
        <td id="basliklar">Ticari Mail</td>
        <td id="basliklar">
            <?php
            echo isset($_POST['checkbox']) ? 'Evet' : 'Hayır';
            ?>
        </td>
    </tr>
    <tr>
            <td id="basliklar">Mesajınız</td>
            <td id="basliklar">
                <?php
                echo $_POST['mesaj'];
                ?>
            </td>
        </tr>


        </tbody>




    </table></div>
<br><br><br><br>

  
</body>
</html>
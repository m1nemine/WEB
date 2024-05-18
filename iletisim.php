<table class="table">
        <thead class="table">
            <tr>
                <th colspan="5" id="basliklar">
                    <h3> MESAJINIZ İLETİLDİ!</h3>
                </th>
            </tr>
        </thead>

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
                <td id="basliklar">Konu</td>
                <td id="basliklar">
                    <?php
                    if (isset($_POST['gonder'])) {

                        $secim = $_POST['radio'];
                        echo $secim;
                    }
                    ?>
                </td>
            </tr>

            <tr>
                <td id="basliklar">Cinsiyetiniz</td>
                <td id="basliklar">
                    <?php
                    if (isset($_POST['gonder'])) {

                        $secim2 = $_POST['radio2'];
                        echo $secim2;
                    }
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

    <tbody>
       

        <tr>
            <td id="basliklar">Tarih</td>
            <td id="basliklar">
                <?php
                echo $_POST['date'];
                ?>
            </td>
        </tr>

        <tr>
            <td id="basliklar">Seçenek</td>
            <td id="basliklar">
                <?php
                echo $_POST['option'];
                ?>
            </td>
        </tr>

        <tr>
            <td id="basliklar">Onay Kutusu</td>
            <td id="basliklar">
                <?php
                echo isset($_POST['checkbox']) ? 'Evet' : 'Hayır';
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

    </tbody>

</table>
<?php
header("refresh:5;url=index.html");
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $isim = $_POST['isim'];
    $mail = $_POST['mail'];
    $radio = $_POST['radio'];
    $radio2 = $_POST['radio2'];
    $date = $_POST['date'];
    $range = $_POST['range'];
    $option = $_POST['option'];
    $checkbox = $_POST['checkbox'];
    $mesaj = $_POST['mesaj'];

    echo "<table border='1'>
    <tr>
    <th>İsim</th>
    <th>Mail</th>
    <th>Radio</th>
    <th>Radio2</th>
    <th>Date</th>
    <th>Range</th>
    <th>Option</th>
    <th>Checkbox</th>
    <th>Mesaj</th>
    </tr>
    <tr>
    <td>$isim</td>
    <td>$mail</td>
    <td>$radio</td>
    <td>$radio2</td>
    <td>$date</td>
    <td>$range</td>
    <td>$option</td>
    <td>$checkbox</td>
    <td>$mesaj</td>
    </tr>
    </table>";
}
?>
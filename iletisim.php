<table class="table">
        <thead class="table">
            <tr>
                <th colspan="5" id="basliklar">
                    <h3> GELEN BİLGİLER</h3>
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
        <!-- Existing rows... -->

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
            <td id="basliklar">Aralık</td>
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
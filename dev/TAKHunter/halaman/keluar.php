<?php
    session_start();
    session_destroy();

    echo "<script>alert ('Harap tunggu')</script>";
    echo '<meta http-equiv="refresh" content="0; url=masuk.php" />';
?>

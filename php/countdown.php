<?php
//chadly was here. 
if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds) {
    for ($i=$seconds; $i>=0; $i--) {
        echo "\r"; 
        echo "$i "; //show number
        
        sleep(1);
    }
    echo "\r  "; //clear and overwrite it
}

countdown(5);

die('0 All done...');
?>
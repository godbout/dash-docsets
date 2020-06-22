<?php

include 'vendor/autoload.php';

echo <<<EOT

\e[1;33m### Grabbing (if needed) and packaging the dummy docset before running the tests ###


EOT;

if (! file_exists(__DIR__ . '/../storage/dummy')) {
    print passthru('dash-docset grab dummy --ansi');
}

print passthru('dash-docset package dummy --ansi');

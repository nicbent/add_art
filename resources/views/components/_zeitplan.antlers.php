<?php

$begin = new DateTime('2012-08-01');
$end = new DateTime('2012-08-01');
$end = $end->modify('+1 day');

$interval = new DateInterval('P1D');
$daterange = new DatePeriod($begin, $interval, $end);
?>

<div class="p-4 bg-primary">
{{ collection:unternehmen taxonomy:teilnahmejahr="{{ add_art_settings:content_from_year:title }}" }}
<div class="block text-md">{{ title }}</div>
{{ /collection:unternehmen }}
</div>


<div class="flex">
    <div class="m-8"><?php foreach ($daterange as $d): ?>
        {{ collection:unternehmen taxonomy:teilnahmejahr="{{ add_art_settings:content_from_year:title }}" }}
<div class="block text-md">{{besichtigungszeiten}}{{ datum }}{{/besichtigungszeiten}}</div>
{{ /collection:unternehmen }}
        <?php endforeach; ?>
    </div>
</div>


<div class="flex">
    <div class="m-8"><?php foreach ($daterange as $d) {echo '<div class="px-8">'.$d->format("Y-m-d").'</div>';} ?></div>
    {{? $page->title ?}}
</div>
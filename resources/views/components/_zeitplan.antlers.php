<?php

$begin = new DateTime($add_art_settings->naechste_add_art['start']);
$end = new DateTime($add_art_settings->naechste_add_art['end']);
$end = $end->modify('+1 day');

$interval = new DateInterval('P1D');
$daterange = new DatePeriod($begin, $interval, $end);


?>
<p>{{? $page->title ?}}</p>
<table class="table-auto w-full">
<thead>
    <tr>
      <th>{{naechste_add_art:start}}</th>
      
      <?php foreach ($daterange as $date) {
    echo '<th>'.$date->format('Y-m-d').'</th>'; }?>
    </tr>
  </thead>

  <tbody>
  {{ collection:unternehmen taxonomy:teilnahmejahr="{{ add_art_settings:content_from_year:title }}" }}

  <tr>
      <td>{{ title }}</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>


{{ /collection:unternehmen }}
  </tbody>

</table>

<div class="p-4 bg-primary">

    {{ collection:unternehmen taxonomy:teilnahmejahr="{{ add_art_settings:content_from_year:title }}" }}

    <div class="block text-md">{{ title }}</div>


    {{besichtigungszeiten}}
    <div>{{ datum format="Y-m-d" }} </div>
    {{/besichtigungszeiten}}
    


    {{ /collection:unternehmen }}
</div>
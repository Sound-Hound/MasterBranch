<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Sound Hound - find music venues and live concerts near you!</title>
  <!-- link to bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <!-- link to jquery -->
  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body>

<script>
$(document).ready(function(){

var queryURL = "https://www.eventbriteapi.com/v3/categories/103/?token=FT55ZUBHVNWUBVJGKW77";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": queryURL,
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function (data) {
  console.log(data);
  
});

});
</script>

</body>
</html>
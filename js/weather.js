function weather() {

    var location = document.getElementById("location");
    var apiKey = 'b8f6e09022b11811a0369d0a1627643e';
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      location.innerHTML = '<strong>Latitude</strong>: ' + latitude + ', ° <strong>Longitude</strong>: ' + longitude + '°';

       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
           if (data.currently.temperature <= 55) {
                $('#temp').html('<i class="fa fa-snowflake-o" aria-hidden="true" style="color:blue"></i> <strong>Temperature</strong>: ' + data.currently.temperature + '° F');
           } else {
            $('#temp').html('<i class="fa fa-sun-o" aria-hidden="true" style="color:orange"></i> <strong>Temperature</strong>: ' + data.currently.temperature + '° F');
           }
            $('#minutely').html('<strong>Summary</strong>: ' + data.minutely.summary);
            $('#humidity').html('<strong>Humidity</strong>: ' + data.currently.humidity);
            $('#timezone').html('<strong>Timezone</strong>: ' + data.timezone);
      });
    }
    
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = " <i class='fa fa-spinner fa-spin fa-fw' aria-hidden='true'></i> Locating... ";
  }

  weather();
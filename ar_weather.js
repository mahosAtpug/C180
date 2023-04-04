<script src="https://aframe.io/releases/1.2.0/aframe.min.js">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
</script>

$(document).ready(function() {
    get_weather();
  });
  
  function get_weather() {
    var lat = YOUR_DESTINATION_LATITUDE;
    var lon = YOUR_DESTINATION_LONGITUDE;
    var api_key = YOUR_OPENWEATHERMAP_API_KEY;
    
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + api_key;
    
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function(response) {
        var city_name = response.name;
        var weather = response.weather[0].main;
        var temperature = response.main.temp - 273.15;
        
        render_ar_content(city_name, weather, temperature);
      },
      error: function(xhr, status, error) {
        console.log("Error: " + error);
      }
    });
  }
  function render_ar_content(city_name, weather, temperature) {
    var ar_text = document.createElement("a-text");
    ar_text.setAttribute("value", "City: " + city_name + "\nWeather: " + weather + "\nTemperature: " + temperature.toFixed(1) + "°C");
    ar_text.setAttribute("position", "0 1.5 -2");
    ar_text.setAttribute("align", "center");
    
    var scene = document.querySelector("a-scene");
    scene.appendChild(ar_text);
  }
    
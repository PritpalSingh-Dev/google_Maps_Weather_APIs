function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.542065, lng: -0.128403},
    zoom: 10
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
       pos = {
         lat : position.coords.latitude,
         lng : position.coords.longitude
       };

       console.log(pos.lat);
       console.log(pos.lng);

      var marker = new google.maps.Marker({
          position: pos,
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
        });
      marker.addListener('click', toggleBounce);

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, marker, map.getCenter());
    });
    
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, marker, pos) {
  marker.setPosition(pos);
  marker.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

$( document ).ready(function(){ 

$(".button-collapse").sideNav();

$('#btnGetWeather').click(function(){

var temperatureElement = $("#temperatureBox");
var conditionElement = $("#conditionBox");
var windElement = $("#windBox"); 


})
});

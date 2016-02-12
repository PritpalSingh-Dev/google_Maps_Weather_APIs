//////////////////Google Maps API//////////////////////

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
    center: {lat: 50.066318, lng: -5.700912},
    zoom: 12
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

/////////////////////iframe API/////////////////////////

//iframe API
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      var player2;
      var player3;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: 'DSM2za9pVRo',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player2 = new YT.Player('player2', {
             height: '100%',
             width: '100%',
             videoId: '3VI43wA1UrU',
             events: {
               'onReady': onPlayerReady,
               'onStateChange': onPlayerStateChange
             }
           });
        player3 = new YT.Player('player3', {
             height: '100%',
             width: '100%',
             videoId: 'on4DRTUvst0',
             events: {
               'onReady': onPlayerReady,
               'onStateChange': onPlayerStateChange
             }
           });
      }
     
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        // event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done)  {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      // }
      var done = false;
      var myPlayerState;
            function onPlayerStateChange(event) {
              if (event.data == YT.PlayerState.PLAYING && !done) {
              done = true;
              }
              myPlayerState = event.data;
            }

      if (myPlayerState == 1){
        player.pauseVideo()
      }

      //iframe API
    

      //Thought Process
      //1. User clicks on first video
      //2. Listen to this event by adding an event listener
      //3. Upon listening to this event, fire a funtion that checks whether any of the three videos are playing e.g. current video attribute?
      //4. If the above condition is true (YT.PlayerState.PLAYING === 1) then call the player.stopVideo() or player.pauseVideo() functions
      //5. Once the other videos have stopped playing, the video that has been selected by the user can be fired to play through a function called event.target.playVideo();


//jQuery for Materialize.css and Open Weather Map API//

$( document ).ready(function(){ 

$(".button-collapse").sideNav();

$(".show").hide();
$('#btnGetWeather').click(function(){
  $(".show").toggle();
 
var temperatureElement = $("#temperatureBox");
var conditionElement = $("#conditionBox");
var windElement = $("#windBox"); 

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lng + "&units=metric&APPID=c81967e1047260a284bc9fb6dd167158",
  method: "get",
  dataType: "json",
  success: function (data) {
    temperatureElement.html('Temperature: ' + '<br>' + '<strong class="wB">' + data.main.temp + '&#8451' + '</strong>' + '<br/>');
    conditionElement.html('Condition: ' + '<br>' + '<strong class="wB">' + data.weather[0].main + '</strong>' + '<br/>');
    windElement.html('Wind: ' + '<br>' + '<strong class="wB">' + data.wind.speed + ' m/s' + '</strong>' + '<br/>');
  }
})
})
});

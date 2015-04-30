$(function() {

  var locale = $('.forecast-locale');

  for(var i=0; i<locale.length; i++) {
    (function(i){
      var $locale = $(locale[i]),
          city = $locale.attr('data-city'),
          state = $locale.attr('data-state');
      $.getJSON( 'data.php?current_conditions&city='+city+'&state='+state, function( data ) {
        if(data.status) {
          console.error(data.status);
        }else {
          console.log(data);
          $($locale.find('.current-cond-city')[0]).html(data.current_observation.display_location.full);
          $($locale.find('.current-cond-temp')[0]).html(data.current_observation.feelslike_f+'&deg; F');
          $($locale.find('.current-cond-text')[0]).html(data.current_observation.weather);
          $($locale.find('.current-cond-icon')[0]).attr('src', data.current_observation.icon_url);
          $($locale.find('.current-cond-wind')[0]).html(data.current_observation.wind_string);
        }
      });
    })(i);
  }


});

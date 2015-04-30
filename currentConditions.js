$(function() {
  $.getJSON( "data.php?current_conditions", function( data ) {
    if(data.status) {
      console.error(data.status);
    }else {
      console.log(data);
      $('.current-cond-city').html(data.current_observation.display_location.full);
      $('.current-cond-temp').html(data.current_observation.feelslike_f+'&deg; F');
      $('.current-cond-text').html(data.current_observation.weather);
      $('.current-cond-icon').attr('src', data.current_observation.icon_url);
    }
  });
});

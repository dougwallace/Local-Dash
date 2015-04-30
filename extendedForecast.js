$(function() {
  var days,
      template;
      $container = $('.extended-forecast-cont');

  $.getJSON( "data.php?10_day", function( data ) {
    if(data.status) {
      console.error(data.status);
    }else {
      console.log(data.forecast.simpleforecast.forecastday);
      days = data.forecast.simpleforecast.forecastday;
      for(var i=0; i<5; i++) {
        template = '<div class="two columns day">';
        template += '<h5 class="extended-forecast-date">'+days[i].date.weekday_short+" "+days[i].date.month+'/'+days[i].date.day+'</h5>';
        template += '<img class="extended-forecast-icon" src="'+days[i].icon_url+'"/>';
        template += '<h5 class="extended-forecast-high"><span>Hi: </span>'+days[i].high.fahrenheit+'&deg;</h5>';
        template += '<h5 class="extended-forecast-low"><span>Lo: </span>'+days[i].low.fahrenheit+'&deg;</h5>';
        template += '</div>'
        $container.append(template);
      }
    }
  });
});

$(function() {

  var locale = $('.forecast-locale');

  for(var i=0; i<locale.length; i++) {
    (function(i){
      var $locale = $(locale[i]),
          city = $locale.attr('data-city'),
          state = $locale.attr('data-state'),
          days,
          template,
          container = $locale.find('.extended-forecast-cont')[0];
      $.getJSON( 'data.php?10_day&city='+city+'&state='+state, function( data ) {
        if(data.status) {
          console.error(data.status);
        }else {
          days = data.forecast.simpleforecast.forecastday;
          for(var i=0; i<5; i++) {
            template = '<div class="two columns day">';
            template += '<h5 class="extended-forecast-date">'+days[i].date.weekday_short+" "+days[i].date.month+'/'+days[i].date.day+'</h5>';
            template += '<img class="extended-forecast-icon" src="'+days[i].icon_url+'"/>';
            template += '<h5 class="extended-forecast-high"><span>Hi: </span>'+days[i].high.fahrenheit+'&deg;</h5>';
            template += '<h5 class="extended-forecast-low"><span>Lo: </span>'+days[i].low.fahrenheit+'&deg;</h5>';
            template += '<p class="wind"><span class="wind-dir">'+days[i].avewind.dir+' </span><span class="wind-speed">'+days[i].avewind.mph+'mph</span></p>';
            template += '</div>'
            $(container).append(template);
          }
        }
      });
    })(i);
  }
});

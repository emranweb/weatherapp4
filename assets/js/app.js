//add event listener to the window loaded
document.addEventListener("DOMContentLoaded", getlocaWeather);

function getlocaWeather() {
  //check the browser have the option
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((postion) => {
      //collect the data and store in a number value not point
      const lat = Math.floor(postion.coords.latitude);
      const lon = Math.floor(postion.coords.longitude);

      // call the weather constructor classs for collect the weather info
      const weather = new Weather(lat, lon);
      //call the weather ui Constructor
      const wui = new WeatherUI();
      //call the forcast ui 
      const fui = new ForecastUI();

      //Weather Featch data.
      weather.getWeather()
        .then((resolve) => {
          //fetch the data and show in ui cllass
          wui.showWeather(resolve);
        });

      //fetch forcast data
      weather.getForecast()
        .then((resolve) => {
          const list = resolve.list;
          // Store the list of arry in new array it input the fetch arry list
          const newArray = (function (list) {
            var sub_arry = [];
            var super_arry = list;
            for (var i = 4; i < super_arry.length; i += 8) {
              sub_arry.push(list[i]);
            }
            // it return the new arry what we need
            return sub_arry;
          })(list);
          //show the datai in daily basis
          fui.DayOne(newArray[0]);
          fui.DayTwo(newArray[1]);
          fui.DayThree(newArray[2]);
          fui.DayFour(newArray[3]);
          fui.DayFive(newArray[4]);
        })
    });
  } else {
    alert("Your Browser Support Geolocation");
  }
}
//weather class for fetch data from open weather
class Weather {
  // this constructor input latitude and longitude
  constructor(lat, lon) {
    //api key
    this.api = "2a8dabf90cb51560d3d3dbb4ce368ebe";
    this.lat = lat; //latitude
    this.lon = lon; //longitude
  }
 //get the current weather info from api
  async getWeather() {
    const respondWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&APPID=${this.api}`);
    //collect the json data from api and retur nit
    const weatherData = respondWeather.json();
    return weatherData;
  }
 //collect the forecast data from api
  async getForecast() {
    const respondForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&APPID=${this.api}`);
    //collect data in json and return
    const forecastData = respondForecast.json();
    return forecastData;
  }

}
class WeatherUI {
  constructor() {
    this.city = document.querySelector(".city");
    this.state = document.querySelector(".state");
    this.location = document.querySelector(".location");
    this.icon = document.querySelector(".icon");
    this.temp = document.querySelector(".temp");
    this.desc = document.querySelector(".desc");
    this.humidtiy = document.querySelector(".humidity_text");
    this.wind = document.querySelector(".wind_text");

  }

  showWeather(data) {
    this.city.textContent = data.name + ",  ";
    this.state.textContent = data.sys.country;
    let img = data.weather.map((a) => a.icon);
    this.icon.innerHTML = ` <i class="owi owi-${img}"></i>`
    this.temp.textContent = Math.floor(data.main.temp)
    this.desc.textContent = data.weather.map((a) => a.description);
    this.humidtiy.textContent = data.main.humidity;
    this.wind.textContent = data.wind.speed;
    // this.cloud.textContent = data.clouds.all;
  }

}



class ForecastUI {

  // Each Day******************************************/
  DayOne(item) {
    //daily day selector
    const daySelector = document.querySelector(".day-1");
    //select the weekly daty
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(`${item.dt_txt}`);
    var dayName = days[d.getDay()];
    //image icon
    let img = item.weather.map((a) => a.icon);
    //inner html inset
    daySelector.innerHTML = `
    <div class="day">
         <h3>${dayName}</h3>
    </div>
     <div class="f-icon">
         <i class="owi owi-${img}"></i>
    </div>
    <div class="f-weather">
        <h2 class="f-weather"><span>${Math.floor(item.main.temp)} </span><sup>o</sup><span></span></h2>
    </div>
  `
  }
  // Each Day******************************************/
  DayTwo(item) {
    const daySelector = document.querySelector(".day-2");
    //select the weekly daty
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(`${item.dt_txt}`);
    var dayName = days[d.getDay()];
    //image icon
    let img = item.weather.map((a) => a.icon);
    //inner html inset

    daySelector.innerHTML = `
    <div class="day">
    <h3>${dayName}</h3>
    </div>
    <div class="f-icon">
        <i class="owi owi-${img}"></i>
    </div>
    <div class="f-weather">
      <h2 class="f-weather"><span>${Math.floor(item.main.temp)} </span><sup>o</sup><span></span></h2>
    </div>
  `
  }
  // Each Day******************************************/
  DayThree(item) {
    const daySelector = document.querySelector(".day-3");
    //select the weekly daty
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(`${item.dt_txt}`);
    var dayName = days[d.getDay()];
    //image icon
    let img = item.weather.map((a) => a.icon);
    //inner html inset

    daySelector.innerHTML = `
    <div class="day">
    <h3>${dayName}</h3>
    </div>
    <div class="f-icon">
        <i class="owi owi-${img}"></i>
    </div>
    <div class="f-weather">
      <h2 class="f-weather"><span>${Math.floor(item.main.temp)} </span><sup>o</sup><span></span></h2>
    </div>
  `
  }
  // Each Day******************************************/
  DayFour(item) {
    const daySelector = document.querySelector(".day-4");
    //select the weekly daty
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(`${item.dt_txt}`);
    var dayName = days[d.getDay()];
    //image icon
    let img = item.weather.map((a) => a.icon);
    //inner html inset

    daySelector.innerHTML = `
    <div class="day">
    <h3>${dayName}</h3>
    </div>
    <div class="f-icon">
        <i class="owi owi-${img}"></i>
    </div>
    <div class="f-weather">
      <h2 class="f-weather"><span>${Math.floor(item.main.temp)} </span><sup>o</sup><span></span></h2>
    </div>
  `
  }
  // Each Day******************************************/
  DayFive(item) {
    const daySelector = document.querySelector(".day-5");
    //select the weekly daty
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(`${item.dt_txt}`);
    var dayName = days[d.getDay()];
    //image icon
    let img = item.weather.map((a) => a.icon);
    //inner html inset
    daySelector.innerHTML = `
    <div class="day">
    <h3>${dayName}</h3>
    </div>
    <div class="f-icon">
        <i class="owi owi-${img}"></i>
    </div>
    <div class="f-weather">
      <h2 class="f-weather"><span>${Math.floor(item.main.temp)} </span><sup>o</sup><span></span></h2>
    </div>
  `
  }

}
import axios from "axios";

export const fetchCurrentData = async (query: string) => {

  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${"41f96a52de3be60701e96034c42ca389"}`;



  const {

    data: { name, sys, coord, timezone},
  } = await axios.get(cityUrl);




  const currentWeatherData = {
    lat: coord.lat,
    lon: coord.lon,
    city: name,
    country: sys.country,
    timezone: timezone,
  };

  

  return currentWeatherData;
};









export const fetchOneCallData = async (
  lat: string,
  lon: string,
  city: string,
  country: string,

  
) => {
  const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${"41f96a52de3be60701e96034c42ca389"}`;



  const {
    data: { daily, timezone, hourly},
  } = await axios.get(oneCallUrl);









//place where get values from openweather
  const dailyData = daily.map((currentData: any) => {


    
 



    return {
      current_temp: currentData.temp.day,
      min_temp: currentData.temp.min,
      max_temp: currentData.temp.max,
      feels_like: currentData.feels_like.day,
      dt: currentData.dt,
      desc: currentData.weather[0].description,
      humidity: currentData.humidity,
      pressure: currentData.pressure,
      wind_speed: currentData.wind_speed,
      icon: currentData.weather[0].icon,
      sunrise: currentData.sunrise,
      sunset: currentData.sunset,
      clouds: currentData.clouds,
      pop: currentData.pop,
      city: city,
      country: country,
      timezone: timezone,
      hourly: hourly,


    };
  });

  return { dailyData };
};








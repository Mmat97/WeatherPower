interface CurrentWeather {


  current_temp: number;
  min_temp: number;
  max_temp: number;
  feels_like: number;
  dt: number;
  desc: string;
  humidity: number;
  pressure: number;
  wind_speed: number;
  icon: string;
  sunrise: number;
  sunset: number;
  clouds: number;
  pop: number;
  city: string;
  country: string;
  timezone: string;
  hourly: Array<any>;




}

export { CurrentWeather };

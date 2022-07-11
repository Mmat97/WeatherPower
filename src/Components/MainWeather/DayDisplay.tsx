import Typography from "@mui/material/Typography";
import WaterIcon from "@mui/icons-material/Water";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import WeatherItem from "../WeatherItem";
import Grid from "@mui/material/Grid";
import { CurrentWeather } from "../../Interfaces/CurrentWeather";
import "./CurrentWeatherBlock.css";









// converts datetime number to corresponding local time
const getTime = (dateTime: number,timezonez: string) => {

  const currentSunrise = new Date(dateTime*1000);


  let usaTime = 
  currentSunrise.toLocaleString("en-US", {
    hour: '2-digit', minute:'2-digit',
      timeZone: timezonez
  });






  
  let letter = usaTime.charAt(0);
  if(letter=='0'){
    usaTime=usaTime.substring(1)
  }
  return usaTime

 
  






};



const CurrentWeatherBlock: React.FC<Props> = ({ currentWeather }) => {
  const iconSrc = `https://openweathermap.org/img/w/${currentWeather.icon}.png`;
  /*after combine in App */
  console.log(currentWeather.timezone)
  console.log(currentWeather)





  


  

  const WeatherDetails = [
    {
      icon: <CompressIcon />,
      labelName: "AirPressure",
      value: `${currentWeather.pressure} hPa`,
    },
    {
      icon: <WaterIcon />,
      labelName: "Humidity",
      value: `${currentWeather.humidity}%`,
    },

    {
      icon: <ThermostatIcon />,
      labelName: "FeelsLike",
      value: `${Math.round(currentWeather.feels_like)}°C,
      ${Math.round(currentWeather.feels_like*1.8)+32}°F`

      
      
    },
    {
      icon: <AirIcon />,
      labelName: "WindSpeed",
      value: `${(currentWeather.wind_speed * 3.6).toFixed(2)} km/h`,
    },
  
    {
      icon: <WbSunnyIcon />,
      labelName: "Sunrise",
      value: getTime(currentWeather.sunrise,currentWeather.timezone),
    },
    {
      icon: <NightlightIcon />,
      labelName: "Sunset",
      value: getTime(currentWeather.sunset,currentWeather.timezone)
    },

    {
      icon: <UmbrellaIcon />,
      labelName: "Precipitation",
      value: `${Math.round(currentWeather.pop * 100)}%`,
    },
    {
      icon: <CloudIcon />,
      labelName: "Clouds",
      value: `${currentWeather.clouds}%`,
    },
  ];

  return (
    <Grid container className="weather-details" direction="column">
      
      <Grid item className="weather-details-left" >
      Average Temp.
        <Grid container direction="row">
          <img src={iconSrc} height="70px" width="70px" alt="WeatherIcon" />
          <Typography variant="h3"  sx={{ marginLeft: 3 }}>
            {Math.round(currentWeather.current_temp)}°C/
            


            
          </Typography>
          <Typography variant="h3"  sx={{ marginLeft: 3 }}>
          {Math.round(currentWeather.current_temp*1.8)+32}°F

          </Typography>
        </Grid>
        <Typography variant="body1" sx={{ marginBottom: 3, marginLeft: 3 }}>
          {currentWeather.desc}
        </Typography>
        <Typography variant="h6" color="blue">
          {currentWeather.city}, {currentWeather.country}
        </Typography>
        <Typography variant="h3" sx={{ marginTop: 4 }}>
        </Typography>
      </Grid>
      <Grid item className="weather-details-right">
        
        <Grid container  className="ddd" spacing={2} >
          {WeatherDetails.map((weatherData, index) => (
            <WeatherItem
              key={index}
              icon={weatherData.icon}
              labelName={weatherData.labelName}
              value={weatherData.value}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};







interface Props {
  currentWeather: CurrentWeather;
}

export default CurrentWeatherBlock;

import Typography from "@mui/material/Typography";

interface Props {
  date: string;
  day: string;
  icon: string;
  minTemp: number;
  maxTemp: number;
}

const DailyBlock: React.FC<Props> = ({ date, day, icon, minTemp, maxTemp }) => {
  const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
  
  

  return (
    <div>
      <Typography >
        {date}
      </Typography>
      <Typography>{day}</Typography>
      <img src={iconSrc}  />
      <Typography >
        min: {Math.round(minTemp)}°C/
        {Math.round(minTemp*1.8)+32}°F

      </Typography>
      <Typography >
        max: {Math.round(maxTemp)}°C/
        {Math.round(maxTemp*1.8)+32}°F
      </Typography>
    </div>
  );
};

export default DailyBlock;

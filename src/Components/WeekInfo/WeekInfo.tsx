import { useState, Dispatch, SetStateAction } from "react";
import DailyBlock from "./bottomDays";
import { CurrentWeather } from "../../Interfaces/CurrentWeather";
import Grid from "@mui/material/Grid";
import "./WeekInfo.css";







const getDay = (cnumtime: number) => {
  const xx= "Sunday"
  const xx2="Monday"
  const xx4="Tuesday"
  const xx5= "Wednesday"
  const xx6="Thursday"
  const xx7= "Friday"
  const xx8= "Saturday"


  const days = [
    xx,
    xx2,
    xx4,
    xx5,
    xx6,
    xx7,
    xx8,
  ];
  const date = new Date(cnumtime* 1000);
  return days[date.getDay()];
};



const getDate = (cnumtimez: number) => {
  const date = new Date(cnumtimez* 1000);
  return date.toLocaleDateString();
};


/*conncted to App.tsx*/
interface Props {
  arrayofWeathDayObjects: CurrentWeather[];
  setWeathData: Dispatch<SetStateAction<CurrentWeather | null>>;
}







const SevenDayBlock: React.FC<Props> = ({
  arrayofWeathDayObjects,
  setWeathData,
}) => {
  const [activeDaily, setActiveDaily] = useState<number>(0);

  const handleDailyClick = (index: number, dailyData: CurrentWeather) => {


    setWeathData(dailyData);
    setActiveDaily(index);
  };

  return (
    <Grid container className="daily-details">
      {arrayofWeathDayObjects.map((currentData, index) => (
        <Grid

 
          onClick={() => handleDailyClick(index, currentData)}
          className={
            activeDaily === index
              ? "daily-details-block-selected"
              : "daily-details-block"
          }
          sx={{ margin: 1 }}

        >
          <DailyBlock
            date={getDate(currentData.dt)}
            day={getDay(currentData.dt)}
            icon={currentData.icon}
            minTemp={currentData.min_temp}
            maxTemp={currentData.max_temp}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SevenDayBlock;








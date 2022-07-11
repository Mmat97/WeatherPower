import { useState, useEffect } from "react";
import { fetchCurrentData, fetchOneCallData } from "./Api";
import SearchForm from "./Components/SearchForm/SearchForm";

import DayDisplay from "./Components/MainWeather/DayDisplay";

import SevenDayBlock from "./Components/WeekInfo/WeekInfo";

import { CurrentWeather } from "./Interfaces/CurrentWeather";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";


import "./App.css";






import {  XAxis, Tooltip,  ResponsiveContainer, AreaChart, Area } from 'recharts'
import {  lineChartData } from "./Interfaces/TodaysData"










function App() {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [dailyWeatherList, setDailyWeatherList] = useState<CurrentWeather[]>(
    []
  );
  const [background, setBackground] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(true);







  

  const [lineChartList, setLineChartList] = useState<lineChartData[] | []>([])








  const getTime = (dateTime: number,timezonez: string) => {

    const currentSunrise = new Date(dateTime*1000);
  
  
    let usaTime = 
    currentSunrise.toLocaleString("en-US", {
      hour: '2-digit', minute:'2-digit',
        timeZone: timezonez
    });
  
  
  
  
  
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    
    let letter = usaTime.charAt(0);
    if(letter=='0'){
      usaTime=usaTime.substring(1)
    }
    return usaTime
  
   
    
  
  
  
  
  
  
  };





  
  const datauseable = () => {
    let data: lineChartData[] = []

    
   





    if(currentWeather!=null){



      currentWeather.hourly.forEach((time) =>
            



            data.push({ name: getTime(time.dt,currentWeather.timezone), temp: Math.round(time.temp*1.8)+32, icon: currentWeather.icon })
           
      )
      
    }

    
    console.log(dailyWeatherList)
    setLineChartList(data)
}





useEffect(() => {
  
    datauseable()

}, [currentWeather])








  const updateWeather = async (city: string) => {
    const currentWeatherData = await fetchCurrentData(city);






   
    if (currentWeatherData) {
      setIsFetching(true);
      const oneCallData = await fetchOneCallData(
        currentWeatherData.lat,
        currentWeatherData.lon,
        currentWeatherData.city,
        currentWeatherData.country,
      );
      /*if go0tm the basic stuff from currentData combine with other call with fetch*/
      if (oneCallData) {
       


        /*city country temp pressure... each day*/

         // get first date info
        setCurrentWeather(oneCallData.dailyData[0]);
        console.log(oneCallData.dailyData[0])




        setDailyWeatherList(oneCallData.dailyData);
        setIsFetching(false);
      }
    }
  };









  useEffect(() => {
    const fetchLocalData = async () => {
      const background="https://i.imgur.com/Blb60xu.jpeg"
      console.log(background)

      try {
  
        if (background) {
          setBackground(background);
        } else {
          setBackground("https://i.imgur.com/fbs86L3.jpeg");
        }
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocalData();
  }, []);

  const handleBackClick = () => {
    setCurrentWeather(null);
    localStorage.setItem("city", "");
  };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    
  };

  return (
    <div>


      



      {isFetching ? (
        <div className="efwefw">
          
    
        </div>
      ) : (
        <div className="beginbgg"style={backgroundStyle} >
          {currentWeather === null ? (
            <SearchForm
              updateWeather={updateWeather}
            />

            
          ) : (

            
            <div>
              <Header handleBackClick={handleBackClick} />


              <Grid container className="topGrid">

       
              <ResponsiveContainer width={400} height={370}>
                
                                <AreaChart data={lineChartList} >
                               
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        
                                            <stop offset="5%" stopColor="#FA8E74" stopOpacity={0.7} />
                                            <stop offset="80%" stopColor="#FA8E74" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    

                                    <XAxis dataKey="name" />
                                    <Area  type="monotone" dot={true} dataKey="temp" stroke="#FA8E74" fillOpacity={1} strokeWidth={3} fill="url(#colorUv)" />
                                    <Tooltip />
                                </AreaChart>
                            </ResponsiveContainer>



               
                <DayDisplay currentWeather={currentWeather} />
               
              </Grid>




       
                <SevenDayBlock
                  arrayofWeathDayObjects={dailyWeatherList}
                  setWeathData={setCurrentWeather}
                />
 
             
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

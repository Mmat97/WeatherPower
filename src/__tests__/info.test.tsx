import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrentWeatherBlock from "../Components/MainWeather/DayDisplay";

test("ss", () => {
  const zdz = {
    city: "Los Angeles",
    clouds: 100,
    country: "US",
    current_temp: 2.7,
    desc: "clear sky",
    dt: 1640970000,
    feels_like: -0.93,
    humidity: 92,
    icon: "04d",
    max_temp: 3.26,
    min_temp: -0.07,
    pop: 0.05,
    pressure: 1012,
    sunrise: 1640955282,
    sunset: 1640987721,
    wind_speed: 4,
  };

  render(<CurrentWeatherBlock currentWeather={zdz} />);

  expect(screen.getByText(/3°C/)).toBeInTheDocument();
  expect(screen.getByText(/clear sky/)).toBeInTheDocument();
  expect(screen.getByText(/1012 hPa/)).toBeInTheDocument();
  expect(screen.getByText(/Los Angeles, US/)).toBeInTheDocument();


});

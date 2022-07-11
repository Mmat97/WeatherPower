import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DailyBlock from "../Components/WeekInfo/bottomDays.tsx";


test("ee", () => {
  const testDate = "07/22/1997";
  const testDay = "Monday";
  const iconSrc = "04n";
  const testMinTemp = parseFloat("25");
  const testMaxTemp = parseFloat("0");

  render(
    <DailyBlock
      date={testDate}
      day={testDay}
      icon={iconSrc}
      minTemp={testMinTemp}
      maxTemp={testMaxTemp}
    />
  );

  expect(screen.getByText(/07\/22\/1997/)).toBeInTheDocument();
  expect(screen.getByText(/0°C/)).toBeInTheDocument();
  expect(screen.getByText(/Monday/)).toBeInTheDocument();
  expect(screen.getByText(/25°C/)).toBeInTheDocument();

});

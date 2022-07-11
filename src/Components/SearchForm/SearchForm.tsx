import { useState, Dispatch, SetStateAction } from "react";

import SearchIcon from "@mui/icons-material/Search";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ErrorMessage from "../ErrorMessage";
import "./SearchForm.css";

interface Props {
  updateWeather: (city: string) => Promise<void>;
}







const SearchForm: React.FC<Props> = ({  updateWeather }) => {
  const [userInput, setUserInput] = useState<string>("");
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  const handleSubmitClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateWeather(userInput);
      localStorage.setItem("city", userInput);
    } catch (error: any) {
      if (error.response.status === 404) {
        DisplayError(
          `${userInput}" does not work with OpenWeather API Search. Try again.`
        );
      } 
      setUserInput("");
    }
  };

  const DisplayError = (errorMsg: string) => {
    setNotificationMessage(errorMsg);
    setOpenNotification(true);
  };






  




  return (
    <div>

<ul className="nav-links">
        <li>
          <a href="https://mail.google.com/" className="nav-items">
            Gmail
          </a>
        </li>
        <li>
    
        </li>
        <li>
        <a
            href="https://www.youtube.com/"
            className="nav-items"
          >
            Youtube
          </a>
        </li>
      </ul>



      <ErrorMessage
        message={notificationMessage}
        open={openNotification}
        setOpen={setOpenNotification}
        type="error"
      />
      <form onSubmit={handleSubmitClick} className="start-card">
          <span className="text-color"> WeatherPower</span>


        
        <TextField
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          sx={{ m: 1, width: "20ch" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ className: "text-label" }}
          autoComplete="off"
          label="City/County, can type country additionally as well "
          variant="filled"
          size="small"
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
         
          endIcon={<SearchIcon />}
          
        >
          Search
        </Button>
      </form>
    </div>
  );




  
};

export default SearchForm;

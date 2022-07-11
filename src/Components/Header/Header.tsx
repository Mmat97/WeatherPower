import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Header.css";

interface Props {
  handleBackClick: () => void;
}

const Header: React.FC<Props> = ({ handleBackClick }) => {
  return (
    <div className="header">
      <div className="back-button">
        <IconButton color="inherit" size="large" onClick={handleBackClick}>
          <KeyboardBackspaceIcon sx={{ fontSize: "45px" }} />
        </IconButton>
      </div>
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


    </div>
  );
};

export default Header;

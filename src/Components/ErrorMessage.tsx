import React, { Dispatch, SetStateAction } from "react";

import MuiAlert from "@mui/material/Alert";

import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(
  props: any,
  ref: React.Ref<HTMLDivElement>
) {
  return <MuiAlert ref={ref}  {...props} />;
});

interface Props {
  message: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  type: string;
}

const ErrorMessage: React.FC<Props> = ({ message, open, type }) => {
 

  return (
    <div className="notification">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
      >
        <Alert variant="standard" severity={type}>
            {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorMessage;

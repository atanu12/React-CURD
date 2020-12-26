import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Action from "./controls/Action";
import Btn from "./controls/Btn";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  btnStyle: {
    display: "flex",
    justifyContent: "right",
  },
});

function Popup(props) {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex" }}>
                  <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>{title}</Typography>
                  <Action
                      color='secondary'
                      onClick={ ()=> {setOpenPopup(false)} }
                  >
                      <CloseIcon/>
                  </Action>
        </div>
        
      </DialogTitle>
      <DialogContent dividers>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;

import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Oswald, sans-serif",
    position: "fixed",
    bottom: 0,
    zIndex: 99,
    background: "#191d28",
    width: "100%",
    // backgroundColor: "#191d28",
  },
  btnDv: {
    display: "flex",
    justifyContent: "center",
    padding: "8px 24px 8px 24px",
  },
  btn: {
    padding: "6px 12px",
    color: "#17a2b8",
    borderRadius: "8px",
    width: "234px",
    height: "38px",
    // backgroundColor: "#191d28",
    cursor: "pointer",
    border: "1px solid #17a2b8",
    fontSize: "16px",
    fontFamily: "sans-serif",
    "&:hover": {
      backgroundColor: "#17a2b8",
      color: "#ffffff",
    },
    background: "none",
  },
}));

const AddToHomeBtn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.btnDv}>
        <button className={classes.btn}>Add hodlinfo to home screen</button>
      </div>
    </div>
  );
};

export default AddToHomeBtn;

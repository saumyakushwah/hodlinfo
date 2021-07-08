import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#191d28',
    height: "60px",
    padding: theme.spacing(2),
    fontFamily: "Oswald, sans-serif",
    marginBottom: "2.5rem",
  },
  footerContent: {
    fontSize: "12px",
    padding: "0 12px 0 0",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", color: "#888686" }}>
        <div className={classes.footerContent}>Copyright © 2019</div>
        <div className={classes.footerContent}>HodlInfo.com</div>
        <div className={classes.footerContent}>
          Developed By
          <a
            href="https://www.quadbtech.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#3dc6c1", textDecoration: "none", margin: "5px" }}
          >
            QuadBTech
          </a>
        </div>
        <div className={classes.footerContent} style={{ marginLeft: "auto" }}>
          <a
            href="mailto:support@hodlinfo.com"
            style={{
              textDecoration: "none",
              color: "#888686",
              alignItems: "right",
            }}
          >
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

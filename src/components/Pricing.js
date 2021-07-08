import React from "react";
// import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Oswald, sans-serif",
    // backgroundColor: "#191d28",
    padding: "2px 16px 16px 16px",
    marginTop: "-30px",
  },
  img: {
    width: "1028px",
    height: "163px",
  },
}));

const Pricing = ({ dark }) => {
  const classes = useStyles();

  return (
    // <Paper square elevation={0} className={classes.root} >
    //   <div>
    //     <div>
    //       <h2 style={{ fontSize: "28px", fontWeight: "400" }}>
    //         Best Price To Trade
    //       </h2>
    //     </div>
    //     <div style={{display: 'flex'}}>
    //     <div style={{fontWeight: '400', fontSize: '40px', color: 'rgb(61, 198, 193)'}}>
    //       0.16%
    //     </div>
    //     <div style={{fontWeight: '400', fontSize: '40px', color: 'rgb(61, 198, 193)'}}>
    //       0.38%
    //     </div>
    //     </div>
    //   </div>
    // </Paper>
    <div
      // style={{ background: "#191d28" }}
      className={classes.root}
    >
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center", padding: "12px" }}>
          <h2
            style={{
              fontWeight: "200",
              color: "#888",
              // opacity: ".4",
              marginBottom: "0",
              // width: "1140px",
              // marginLeft: "120px",
              letterSpacing: ".75px",
            }}
            className="best-text"
          >
            Best Price To Trade
          </h2>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: "400",
              color: "rgb(61, 198, 193)",
              textAlign: "center",
            }}
            className="side-text"
          >
            0.16 %
          </div>
          <div className="bottom-text">5 Mins</div>
        </div>
        <div>
          <div
            style={{
              fontWeight: "400",
              color: "rgb(61, 198, 193)",
              textAlign: "center",
            }}
            className="side-text"
          >
            0.38 %
          </div>
          <div className="bottom-text">1 Hour</div>
        </div>
        <div>
          <div
            style={{
              fontWeight: "400",
              // fontSize: "80px",
              color: "#fff",
              // marginTop: "-30px",
              textAlign: "center",
              padding: "0 0 10px",
            }}
            className={`middle-text ${dark ? "dark-text" : "light-text"}`}
          >
            ₹ 26,44,074
          </div>
          <div className="bottom-text">
            Average BTC/INR net price including commission
          </div>
        </div>
        <div>
          <div
            style={{
              fontWeight: "400",
              color: "rgb(61, 198, 193)",
              textAlign: "center",
            }}
            className="side-text"
          >
            5.1 %
          </div>
          <div className="bottom-text">1 Day</div>
        </div>
        <div>
          <div
            style={{
              fontWeight: "400",
              color: "rgb(61, 198, 193)",
              textAlign: "center",
            }}
            className="side-text"
          >
            9.99 %
          </div>
          <div className="bottom-text">7 Days</div>
        </div>
      </div>
      {/* <Grid container>
        <Grid
          item
          xs={2}
          style={{
            color: "#fff",
            opacity: ".4",
            marginTop: "-25px",
            textAlign: "center",
            fontWeight: "200",
            fontSize: "20px",
          }}
        >
          <div>5 Mins</div>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            color: "#fff",
            opacity: ".4",
            marginTop: "-25px",
            textAlign: "center",
            fontWeight: "200",
            fontSize: "20px",
          }}
        >
          <div>1 Hour</div>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            color: "#fff",
            opacity: ".4",
            textAlign: "center",
            fontWeight: "200",
            fontSize: "16px",
            paddingBottom: "40px",
            letterSpacing: "1px",
          }}
        >
          <div>Average BTC/INR net price including commission</div>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            color: "#fff",
            opacity: ".4",
            marginTop: "-25px",
            textAlign: "center",
            fontWeight: "200",
            fontSize: "20px",
          }}
        >
          <div>1 Day</div>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            color: "#fff",
            opacity: ".4",
            marginTop: "-25px",
            textAlign: "center",
            fontWeight: "200",
            fontSize: "20px",
          }}
        >
          <div>7 Days</div>
        </Grid>
      </Grid> */}
      <div style={{ padding: "12px" }}>
        <a
          href="https://finstreet.in/courses"
          target="_blank"
          rel="no-referrer noreferrer"
        >
          <img src="/cryptonews.54869ee3.png" alt="Crypto News" width="100%" />
        </a>
      </div>
    </div>
  );
};

export default Pricing;

import React, { useEffect, useState } from "react";
// import { Paper } from "@material-ui/core";
import CountUp from "react-countup";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import TrendingUpIcon from "@material-ui/icons/ArrowDropUp";
import TrendingDownIcon from "@material-ui/icons/ArrowDropDown";

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

const Arrow = ({ prev, curr }) => {
  const symbol =
    curr > prev ? (
      <TrendingUpIcon
        style={{ fontSize: "inherit", color: "green" }}
      />
    ) : (
      <TrendingDownIcon
        style={{ fontSize: "inherit", color: "red" }}
      />
    );
  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>{symbol}</div>
  );
};

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const Pricing = ({ dark }) => {
  const [state, setState] = useState({
    old: { one: 0, two: 0, three: 0, four: 0, main: 0 },
    curr: { one: 0.16, two: 0.38, three: 5.1, four: 9.99, main: 2644074 },
  });
  const { old, curr } = state;
  const { one, two, three, four, main } = old;
  const {
    one: nOne,
    two: nTwo,
    three: nThree,
    four: nFour,
    main: nMain,
  } = curr;
  const classes = useStyles();

  console.log(old.main, curr.main);

  useEffect(() => {
    const inter = setInterval(() => {
      const { one, two, three, four, main } = curr;
      const random1 = Math.random();
      const random2 = Math.random();
      const random3 = Math.random();
      const random4 = Math.random();
      const random5 = getRandom(20);
      const sign1 = getRandom(2) === 0 ? "+" : "-";
      const sign2 = getRandom(2) === 0 ? "+" : "-";
      const sign3 = getRandom(2) === 0 ? "+" : "-";
      const sign4 = getRandom(2) === 0 ? "+" : "-";
      const sign5 = getRandom(2) === 0 ? "+" : "-";
      const newOne = one + random1 * (sign1 === "-" ? -1 : 1);
      const newTwo = two + random2 * (sign2 === "-" ? -1 : 1);
      const newThree = three + random3 * (sign3 === "-" ? -1 : 1);
      const newFour = four + random4 * (sign4 === "-" ? -1 : 1);
      const newMain = main + random5 * (sign5 === "-" ? -1 : 1);
      setState((prev) => ({
        ...prev,
        old: { ...prev.curr },
        curr: {
          one: newOne,
          two: newTwo,
          three: newThree,
          four: newFour,
          main: newMain,
        },
      }));
    }, 3000);
    return () => {
      clearInterval(inter);
    };
  }, [curr]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={classes.root}>
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
            <CountUp
              start={one}
              end={nOne}
              separator=","
              duration={1.5}
              suffix=" %"
              decimals={2}
              decimal="."
            />
            <Arrow prev={one} curr={nOne} />
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
            <CountUp
              start={two}
              end={nTwo}
              separator=","
              duration={1.5}
              suffix=" %"
              decimals={2}
              decimal="."
            />
            <Arrow prev={two} curr={nTwo} />
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
            <CountUp
              start={main}
              end={nMain}
              separator=","
              duration={1.5}
              prefix="₹ "
              // decimals={3}
              decimal=","
            />
            <Arrow prev={main} curr={nMain} />
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
            <CountUp
              start={three}
              end={nThree}
              separator=","
              duration={1.5}
              suffix=" %"
              decimals={2}
              decimal="."
            />
            <Arrow prev={three} curr={nThree} />
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
            <CountUp
              start={four}
              end={nFour}
              separator=","
              duration={1.5}
              suffix=" %"
              decimals={2}
              decimal="."
            />
            <Arrow prev={four} curr={nFour} />
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
          <Slider {...settings}>
            <div>
              <img
                src="/cryptonews.54869ee3.png"
                alt="Crypto News"
                width="100%"
                height="230px"
              />
            </div>
            <div>
              <img src="/1.jpg" alt="Crypto News" width="100%" height="230px" />
            </div>
            <div>
              <img src="/2.jpg" alt="Crypto News" width="100%" height="230px" />
            </div>
            <div>
              <img src="/3.jpg" alt="Crypto News" width="100%" height="230px" />
            </div>
          </Slider>
        </a>
      </div>
    </div>
  );
};

export default Pricing;

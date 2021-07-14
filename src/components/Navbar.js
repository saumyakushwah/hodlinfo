import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import { Button, MenuItem, Menu, Grid } from "@material-ui/core";
import DownIcon from "@material-ui/icons/ArrowDropDown";
import Progress from "../components/Progress";
import TelegramIcon from "@material-ui/icons/Telegram";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Oswald, sans-serif",
  },
  // navbar: {
  //   backgroundColor: "#191d28",
  // },
  navContent: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  "& .MuiInput-underline:after": {
    // border: '1px solid white',
    color: "white",
  },
  "& .MuiInput-input": {
    color: "white",
  },
}));
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#191d28",
        opacity: 1,
        border: "1px solid #ffffff80",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const CURRENCIES = ["INR"];
const COINS = [
  "BTC",
  "ETH",
  "USDT",
  "XRP",
  "TRX",
  "DASH",
  "ZEC",
  "XEM",
  "IOST",
  "WIN",
  "BTT",
  "WRX",
];

const Dropdown = ({ delay, items, defaultValue, style, dark }) => {
  const [value, setValue] = React.useState(defaultValue);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        style={{
          color: !dark ? "#2e3241" : "#eee",
          backgroundColor: dark ? "#2e3241" : "#eee",
          borderRadius: "10px",
          padding: "6px 20px",
          fontFamily: "Oswald, sans-serif",
          fontWeight: "300",
          fontSize: "16px",
          ...style,
        }}
        className={`navbar__dropdown slide-animation delay-${delay}`}
      >
        {value} <DownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem selected={item === value} onClick={() => setValue(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Navbar = ({ setDark, dark }) => {
  const classes = useStyles();

  // const [btn, setBtn] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedC: true,
  // });

  // const handleChangeBtn = (event) => {
  //   setBtn({ ...btn, [event.target.name]: event.target.checked });
  // };

  // const [currency, setCurrency] = React.useState("");

  // const handleChangeCurr = (event) => {
  //   setCurrency(event.target.value);
  // };

  // const [crypto, setCrypto] = React.useState("");

  // const handleChangeCryp = (event) => {
  //   setCrypto(event.target.value);
  // };

  // const [state, setState] = React.useState({
  //   crypto: "",
  //   name: "h",
  // });
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [anchorEl2, setAnchorEl2] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleClick2 = (event) => {
  //   setAnchorEl2(event.currentTarget);
  // };

  // const handleClose2 = () => {
  //   setAnchorEl2(null);
  // };

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  // // <div className={classes.root}>
  //   {/* <Container> */}
  //   {/* <AppBar position="static" className={classes.navbar}> */}
  //     {/* <div className={classes.navContent}> */}
  return (
    <div
      style={{
        // background: "#191d28",
        // height: "112px",
        padding: "38px 38px 0 38px",
      }}
      className={classes.root}
    >
      <Grid className="navbar" container spacing={3}>
        <Grid item sm={12} md={4}>
          <img
            src="/HODLINFO.8f78fc06.png"
            alt="hodlinfo logo"
            width="262px"
            height="44px"
            className="slide-animation"
          />
          <div>
            <h4
              style={{
                color: "gray",
                fontSize: "18px",
                marginTop: "-16px",
                opacity: "0.8",
                fontWeight: "300",
              }}
            >
              Powered By{" "}
              <span style={{ color: "rgb(61, 198, 193)" }}>Finstreet</span>{" "}
            </h4>
          </div>
        </Grid>
        <Grid item sm={12} md={4} style={{ textAlign: "center" }}>
          <Dropdown
            delay={1}
            dark={dark}
            items={CURRENCIES}
            defaultValue="INR"
          />
          <Dropdown
            delay={2}
            dark={dark}
            items={COINS}
            defaultValue="BTC"
            style={{ marginLeft: "1rem" }}
          />
          <a
            href="https://wazirx.com/exchange/BTC-INR"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button
              className="navbar__dropdown slide-animation delay-3"
              aria-controls="simple-menu"
              style={{
                color: !dark ? "#2e3241" : "#eee",
                // background: "rgba(255, 255, 255, 0.2)",

                backgroundColor: dark ? "#2e3241" : "#eee",
                borderRadius: "10px",
                marginLeft: "1rem",
                padding: "6px 20px",
                fontFamily: "Oswald, sans-serif",
                fontWeight: "300",
                fontSize: "16px",
              }}
            >
              BUY BTC
            </Button>
          </a>
        </Grid>
        <Grid
          item
          sm={12}
          md={4}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* <div */}
          {/* style={{ display: "flex", justifyContent: "space-between" }} */}
          {/* > */}
          <div
            style={{ display: "inline-block" }}
            className="slide-animation delay-4"
          >
            <Progress style={{ display: "inline-block" }} />
          </div>
          <div
            style={{ display: "inline-block", marginLeft: "1rem" }}
            className="slide-animation delay-5"
          >
            <a
              href="https://hodlinfo.com/connect/telegram"
              style={{
                color: "white",
                display: "inline-flex",
                // display: "flex",
                alignItems: "center",
                textDecoration: "none",
                backgroundColor: "rgb(61, 198, 193)",
                padding: "8px",
                borderRadius: "10px",
                whiteSpace: "nowrap",
                // width: "178px",
                // height: "40px",
              }}
            >
              {/* <div style={{ marginRight: "10px" }}> */}
              <TelegramIcon style={{ marginRight: "8px" }} />
              {/* </div> */}

              <div>Connect Telegram</div>
            </a>
          </div>
          {/* <label class="switch">
              <input type="checkbox" checked="" />
              <span class="slider round"></span>
            </label> */}
          {/* <FormGroup> */}
          {/* <FormControlLabel */}
          {/* control={ */}
          <div
            style={{ display: "inline-block", marginLeft: "1rem" }}
            className="slide-animation delay-6"
          >
            <IOSSwitch
              checked={dark}
              onChange={() => setDark((prev) => !prev)}
              // name="dark"
              defaultChecked
            />
          </div>
          {/* } */}
          {/* /> */}
          {/* </FormGroup> */}
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  );
};
//         {/* <FormControl */}
// </div><div style={{ textAlign: "center", color: "#fff" }}>
//         {/* // className={classes.formControl} */}
//         {/* > */}
//           {/* <Select
//               // className={classes.selectEmpty}
//               value={state.crypto}
//               name="crypto"
//               onChange={handleChange}
//               // inputProps={{ "aria-label": "crypto" }}
//             >
//               <option value="" disabled>
//                 BTC
//               </option>
//               <option value={10}>BTC</option>
//               <option value={20}>ETH</option>
//               <option value={30}>USDT</option>
//               <option value={40}>XRP</option>
//               <option value={50}>TRX</option>
//               <option value={60}>DASH</option>
//               <option value={70}>ZEC</option>
//               <option value={80}>XEM</option>
//               <option value={90}>IOST</option>
//               <option value={100}>WIN</option>
//               <option value={120}>BIT</option>
//               <option value={130}>WRX</option>
//             </Select> */}
//         {/* </FormControl> */}
//       {/* </div> */}
//     {/* </div> */}
//   {/* </AppBar> */}
//   {/* </Container> */}
// {/* </div> */}

export default Navbar;

import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Oswald, sans-serif",
    // backgroundColor: "#191d28",
    padding: theme.spacing(2),
    marginTop: "-35px",
    borderBottom: "2px solid #2e3241",
  },
  attribute: {
    fontSize: "24px",
    cursor: "pointer",
    color: "#2e3241",
    fontWeight: "400",
    padding: "2px 8px",
    alignItem: "center",
    letterSpacing: "1px",
  },
  darkAttribute: {
    color: "#ffffff80",
    fontSize: "24px",
    cursor: "pointer",
    fontWeight: "400",
    padding: "2px 8px",
    alignItem: "center",
    letterSpacing: "1px",
  },
  tuple: {
    backgroundColor: "#2e3241",
    // boxSizing: 'border-box',
    borderRadius: "20px",

    "& td": {
      padding: "12px",
      whiteSpace: "nowrap",
    },
    "& td:first-child": {
      borderRadius: "10px 0 0 10px",
    },
    "& td:last-child": {
      borderRadius: "0 10px 10px 0",
    },
  },
  darkTuple: {
    backgroundColor: "#eee",
    // boxSizing: 'border-box',
    borderRadius: "20px",

    "& td": {
      padding: "12px",
      whiteSpace: "nowrap",
    },
    "& td:first-child": {
      borderRadius: "10px 0 0 10px",
    },
    "& td:last-child": {
      borderRadius: "0 10px 10px 0",
    },
  },
  cell: {
    color: "#2e3241",
    fontSize: "24px",
    // padding: "8px 24px",
    verticalAlign: "middle",
    textAlign: "center",
    fontWeight: "400",
  },
  darkCell: {
    color: "#ffffff",
    fontSize: "24px",
    // padding: "8px 24px",
    verticalAlign: "middle",
    textAlign: "center",
    fontWeight: "400",
  },
  CrypLogo: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    verticalAlign: "middle",
    borderStyle: "none",
  },
  CrypName: {
    fontSize: "24px",
    fontWeight: "400",
    // color: "#ffffff",
    verticalAlign: "middle",
    marginLeft: "15px",
  },
}));

const Table = ({ dark }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            padding: "8px",
            cellPadding: "0px",
            cellSpacing: "0px",
            border: "none",
            borderCollapse: "separate",
            borderRadius: "4px",
            borderSpacing: "0 1em",
          }}
        >
          <thead>
            <tr>
              <th>
                <h4>
                  <span
                    className={dark ? classes.darkAttribute : classes.attribute}
                  >
                    #
                  </span>
                </h4>
              </th>
              <th>
                <h4>
                  <span
                    className={dark ? classes.darkAttribute : classes.attribute}
                  >
                    Platform
                  </span>
                </h4>
              </th>
              <th>
                <h4>
                  <span
                    className={dark ? classes.darkAttribute : classes.attribute}
                  >
                    Last Traded Price
                  </span>
                </h4>
              </th>
              <th>
                <h4>
                  <span
                    className={dark ? classes.darkAttribute : classes.attribute}
                  >
                    Buy / Sell Price
                  </span>
                </h4>
              </th>
              <th>
                <h4>
                  <span
                    className={dark ? classes.darkAttribute : classes.attribute}
                  >
                    Difference
                  </span>
                </h4>
              </th>
              <th>
                <h4>
                  <span
                    className={dark ? classes.darkAttribute : classes.attribute}
                  >
                    Savings
                  </span>
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={!dark ? classes.darkTuple : classes.tuple}>
              <td style={{ alignItem: "center" }}>
                <h4 className={dark ? classes.darkCell : classes.cell}>1</h4>
              </td>
              <td>
                <a
                  href="https://wazirx.com/exchange/BTC-INR"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <h4 className={dark ? classes.darkCell : classes.cell}>
                    <img
                      src="/WazirX.png"
                      className={classes.CrypLogo}
                      alt="logo"
                    />
                    <span className={classes.CrypName}>WazirX</span>
                  </h4>
                </a>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  ₹ 25,73,809
                </h4>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  <span>₹ 25,73,809 / ₹ 25,74,623</span>
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  0.06 %
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  ▲ ₹ 1,639
                </h4>
              </td>
            </tr>
            <tr className={!dark ? classes.darkTuple : classes.tuple}>
              <td style={{ alignItem: "center" }}>
                <h4 className={dark ? classes.darkCell : classes.cell}>2</h4>
              </td>
              <td>
                <a
                  href="https://wazirx.com/exchange/BTC-INR"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <h4 className={dark ? classes.darkCell : classes.cell}>
                    <img
                      src="/bitbns.png"
                      className={classes.CrypLogo}
                      alt="logo"
                    />
                    <span className={classes.CrypName}>Bitbns</span>
                  </h4>
                </a>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  ₹ 25,72,254
                </h4>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  <span>₹ 25,72,622 / ₹ 25,74,158</span>
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  0.00 %
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  ▲ ₹ 85
                </h4>
              </td>
            </tr>
            <tr className={!dark ? classes.darkTuple : classes.tuple}>
              <td style={{ alignItem: "center" }}>
                <h4 className={dark ? classes.darkCell : classes.cell}>3</h4>
              </td>
              <td>
                <a
                  href="https://wazirx.com/exchange/BTC-INR"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <h4 className={dark ? classes.darkCell : classes.cell}>
                    <img
                      src="/giotus.png"
                      className={classes.CrypLogo}
                      alt="logo"
                    />
                    <span className={classes.CrypName}>Giotus</span>
                  </h4>
                </a>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  ₹ 25,50,100
                </h4>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  <span>₹ 25,50,200 / ₹ 25,85,499</span>
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#da5757" }}
                >
                  -0.86 %
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#da5757" }}
                >
                  ▼ ₹ 22,069
                </h4>
              </td>
            </tr>
            <tr className={!dark ? classes.darkTuple : classes.tuple}>
              <td style={{ alignItem: "center" }}>
                <h4 className={dark ? classes.darkCell : classes.cell}>4</h4>
              </td>
              <td>
                <a
                  href="https://wazirx.com/exchange/BTC-INR"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <h4 className={dark ? classes.darkCell : classes.cell}>
                    <img
                      src="/colodax.png"
                      className={classes.CrypLogo}
                      alt="logo"
                    />
                    <span className={classes.CrypName}>Colodax</span>
                  </h4>
                </a>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  ₹ 25,83,138
                </h4>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  <span>₹ 25,75,167 / ₹ 26,08,984</span>
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  0.43 %
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  ▲ ₹ 10,968
                </h4>
              </td>
            </tr>
            <tr className={!dark ? classes.darkTuple : classes.tuple}>
              <td style={{ alignItem: "center" }}>
                <h4 className={dark ? classes.darkCell : classes.cell}>5</h4>
              </td>
              <td>
                <a
                  href="https://wazirx.com/exchange/BTC-INR"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <h4 className={dark ? classes.darkCell : classes.cell}>
                    <img
                      src="/zebpay.png"
                      className={classes.CrypLogo}
                      alt="logo"
                    />
                    <span className={classes.CrypName}>Zebpay</span>
                  </h4>
                </a>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  ₹ 25,78,999
                </h4>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  <span>₹ 25,78,999 / ₹ 25,76,909</span>
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  0.27 %
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  ▲ ₹ 6,829
                </h4>
              </td>
            </tr>
            <tr className={!dark ? classes.darkTuple : classes.tuple}>
              <td style={{ alignItem: "center" }}>
                <h4 className={dark ? classes.darkCell : classes.cell}>6</h4>
              </td>
              <td>
                <a
                  href="https://wazirx.com/exchange/BTC-INR"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <h4 className={dark ? classes.darkCell : classes.cell}>
                    <img
                      src="/coindcx.png"
                      className={classes.CrypLogo}
                      alt="logo"
                    />
                    <span className={classes.CrypName}>CoinDCX</span>
                  </h4>
                </a>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  ₹ 25,74,716
                </h4>
              </td>
              <td>
                <h4 className={dark ? classes.darkCell : classes.cell}>
                  <span>₹ 25,71,957 / ₹ 25,86,000</span>
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  0.10 %
                </h4>
              </td>
              <td>
                <h4
                  className={dark ? classes.darkCell : classes.cell}
                  style={{ color: "#5dc7c2" }}
                >
                  ▲ ₹ 2,547
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <a href="https://ftx.com/" target="_blank" rel="noreferrer">
          <img
            src="/Banner.png"
            alt="banner"
            width="100%"
            style={{ marginTop: "16px", marginBottom: "6px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Table;

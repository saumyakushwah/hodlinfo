import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        style={{ color: "rgb(61, 198, 193)" }}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          style={{
            color: "rgb(61, 198, 193)",
            fontFamily: "Oswald,sans-serif",
            fontSize: "18px",
            lineHeight: "1.5rem",
          }}
        >
          {props.text}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function Progress() {
  // const [progress, setProgress] = React.useState(100);
  const [text, setText] = React.useState(60);

  // console.log(text);
  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log(text);
      if (text <= 0) setText(60);
      else setText((prev) => prev - 1);
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [text]);

  const value = (text / 60) * 100;

  return <CircularProgressWithLabel text={text} value={value} />;
}

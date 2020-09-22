import React from "react";
import useQrCode from "react-qrcode-hook";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6rem",
  },
  download: {
    backgroundColor: "#f51735",
    color: "#F8F0D7",
    marginTop: "1rem",
  },
})


const options = {
  margin: 5,
  scale: 7,
  color: {
    dark: "#031627",
    light: "#FDFFFC",
  },
};

const QrCode = (props) => {
  const classes = useStyles()
  const qrCode = useQrCode(`${props.url}`, options);
  return (
    <div className={classes.root}>
        <img alt="qr code" src={qrCode} />
      <Button variant="contained" href={qrCode} download="qrcode" className={classes.download}>
        Download
      </Button>
    </div>
  );
};


export default QrCode;

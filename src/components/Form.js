import React, { useState } from "react";
import QrCode from "./QrCode";
import { Button, Typography, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import LOGO from "../assets/LogoProject.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "100%",
    alignItems: "center",
    marginTop: "5rem",
  },
  urlInput: {
    marginBottom: "3rem",
  },
  generateButton: {
    marginBottom: "3rem",
    backgroundColor: theme.palette.primary.red 
  },
  title: {
    marginBottom: "3rem",
  },
  homeScreen: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "50%",
    marginTop: "8rem",
  },
});

const Form = ({classes}) => {
  const [urlToConvert, setUrl] = useState ("")
  const [convertion, setConvertion] = useState (false)

  const handleChange = (e) => {
    setUrl(e.target.value);
  }
  const handleClick = (e) => {
    setConvertion(true);
  }
  const handleClear = (e) => {
    setUrl("")
    setConvertion(false)
  }

  return (
    <div className={classes.root}>
    <Typography variant="h1" className={classes.title}>QR code generator</Typography>
      <TextField
        label="Entrez une URL"
        variant="outlined"
        color="secondary"
        className={classes.urlInput}
        id="urlToConvert"
        type="text"
        value={urlToConvert}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        className={classes.generateButton}
        color="primary"
        onClick={handleClick}
      >
        Générez le QR code
      </Button>
      { convertion ? (
        <div className={classes.homeScreen}>
          <QrCode url={urlToConvert} />
          <Button
            variant="outlined"
            className={classes.clearButton}
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      ) : (
        <div className={classes.homeScreen}>
          <img className={classes.logo} alt="logo" src={LOGO} />
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(Form);

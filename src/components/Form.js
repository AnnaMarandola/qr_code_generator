import React, { useState } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PDF from "./PDF";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "100%",
    alignItems: "center",
    marginTop: "3rem",
  },
  urlInput: {
    marginBottom: "3rem",
  },
  generateButton: {
    marginBottom: "2rem",
    backgroundColor: theme.palette.primary.red,
    color: theme.palette.primary.whiteish,
  },
  title: {
    marginBottom: "3rem",
  },
  homeScreen: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  clearButton: {
    marginTop: "2rem",
    width: "5rem",
  },
  logo: {
    width: "50%",
    marginTop: "8rem",
  },
});

const Form = ({ classes }) => {
  const [urlToConvert, setUrl] = useState("");
  const [pdf, setPdf] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handleClear = () => {
    setPdf(false);
  };
  const handlePdf = () => {
    setPdf(true);
  };

  return (
    <div className={classes.root}>
      {!pdf ? 
        <div className={classes.root}>
          <Typography variant="h1" className={classes.title}>
            QR code generator
          </Typography>
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
            className={classes.clearButton}
            color="primary"
            onClick={handlePdf}
          >
            générer le pdf
          </Button>
        </div>
      :
        <div>
          <Button onClick={handleClear}>Retour</Button>
          <PDF />
        </div>
      }
    </div>
  );
};

export default withStyles(styles)(Form);

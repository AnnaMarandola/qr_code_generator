import React, { Component } from "react";
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
  },
  title: {
    marginBottom: "3rem",
    fontSize: "1.8rem",
    fontWeight: "600",
    
  },
  homeScreen: {
    width: "100%",
  },
  logo: {
    width: "55%",
    marginTop: "8rem",
    marginLeft: "4.2rem",
  },
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlToConvert: " ",
      convertion: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({ urlToConvert: e.target.value });
  }
  handleClick(e) {
    this.setState({ convertion: true });
  }
  handleClear(e) {
    this.setState({urlToConvert: "", convertion: false})
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Typography className={classes.title}>QR code generator</Typography>
        <TextField
          label="Entrez une URL"
          variant="outlined"
          color="secondary"
          className={classes.urlInput}
          id="urlToConvert"
          type="text"
          value={this.state.urlToConvert}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          className={classes.generateButton}
          color="primary"
          onClick={this.handleClick}
        >
          Générez le QR code
        </Button>
        {this.state.convertion ? (
          <div className={classes.homeScreen}>
            <QrCode url={this.state.urlToConvert} />
            <Button
              variant="outlined"
              className={classes.clearButton}
              onClick={this.handleClear}
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
    );
  }
}

export default withStyles(styles)(Form);

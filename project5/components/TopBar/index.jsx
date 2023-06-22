import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: "",
      versionNumber: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setContext();
    }
  }

  componentDidMount() {
    this.setContext();
    this.getVersionNumber();
  }

  setContext() {
    const { pathname } = this.props.location;
    let context = "";

    if (pathname === "/") {
      context = "Home";
    } else {
      const userId = pathname.split("/")[2];
      //const user = window.cs142models.userModel(userId);
      fetchModel(`/user/${userId}`)
        .then((response) => {
          const user = response.data;

          if (pathname.startsWith("/users")) {
            context = `${user.first_name} ${user.last_name}`;
          } else if (pathname.startsWith("/photos")) {
            context = `Photos of ${user.first_name} ${user.last_name}`;
          }

          this.setState({ context });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }

  async getVersionNumber() {
    try {
      const response = await fetchModel("http://localhost:3000/test/info");
      const versionNumber = response.data.__v;
      this.setState({ versionNumber });
    } catch (error) {
      console.error("Error fetching version number:", error);
    }
  }

  render() {
    const { context, versionNumber } = this.state;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Photo Share App
          </Typography>
          <Typography variant="h6" color="inherit" style={{ marginLeft: "auto" }}>
            {context} -
          </Typography>
          <Typography variant="subtitle1">
            Version: {versionNumber}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(TopBar);

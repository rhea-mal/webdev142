import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React component of CS142 Project 5.
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    //const data = window.cs142models.userListModel();
    //this.setState({ userList: data });
    fetchModel(`/user/list`)
      .then((response) => {
        const userList = response.data;
        this.setState({ userList });
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }

  render() {
    const { userList } = this.state;

    return (
      <div>
        <Typography variant="body1">
          Users:
        </Typography>
        <List component="nav" className="UserList">
          {userList.map((user) => (
            <React.Fragment key={user._id}>
              <ListItem
                key={user._id}
                component={Link}
                to={`/users/${user._id}`}
              >
                <ListItemText primary={`${user.first_name} ${user.last_name}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Typography variant="body1">
          Click to see each profile!
        </Typography>
      </div>
    );
  }
}

export default UserList;

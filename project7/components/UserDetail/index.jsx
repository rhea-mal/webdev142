import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.css";

/**
 * Define UserDetail, a React component of CS142 Project 5.
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { userId } = this.props.match.params;
    const prevUserId = prevProps.match.params.userId;
    if (userId !== prevUserId) {
      this.fetchUser();
    }
  }

  fetchUser() {
    const { userId } = this.props.match.params;
    axios
      .get(`/user/${userId}`)
      .then((response) => {
        const user = response.data;
        this.setState({ user });
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }

  render() {
    const { user } = this.state;
    const { userId } = this.props.match.params;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{`${user.first_name}`}</h1>
        <p>User ID: {userId}</p>
        <p>Name: {`${user.first_name} ${user.last_name}`}</p>
        <p>Location: {user.location}</p>
        <p>Description: {user.description}</p>
        <div className="link">
          <Link to={`/photos/${userId}`}>See Photos</Link>
        </div>
      </div>
    );
  }
}

export default UserDetail;

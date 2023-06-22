import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: null,
      user: null,
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    fetchModel(`/photosOfUser/${userId}`)
      .then((response) => {
        const photoList = response.data;
        this.setState({ photoList });
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });

    fetchModel(`/user/${userId}`)
      .then((response) => {
        const user = response.data;
        this.setState({ user });
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }

  render() {
    const userId = this.props.match.params.userId;
    const { photoList, user } = this.state;

    if (!photoList || !user) {
      return null; // or return a loading indicator
    }

    if (photoList.length === 0) {
      return <div>No photos available.</div>;
    }

    return (
      <div className="container">
        <Typography variant="h6" className="header">
          Photos of {user ? `${user.first_name} ${user.last_name}` : "User"}
        </Typography>
        <Typography variant="body1">
          Showing details of user: {userId}
        </Typography>
        {photoList.map((photo) => (
          <div key={photo._id} className="photo">
            <img
              src={`/images/${photo.file_name}`}
              alt={photo.file_name}
              className="photo-img"
            />
            <p className="date-time">Date/Time: {photo.date_time}</p>
            <p className="file-name">File Name: {photo.file_name}</p>
            <p className="comments">Comments:</p>
            <br /> {/*line break */}
            {photo.comments && photo.comments.length > 0 ? (
              photo.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <p className="user-name">
                    <Link to={`/users/${comment.user._id}`}>
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
                    <br />
                    <span className="date-time">{comment.date_time}</span>
                  </p>
                  <p>{comment.comment}</p>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments available.</p>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default UserPhotos;

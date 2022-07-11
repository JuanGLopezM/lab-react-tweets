// eslint-disable-next-line
import userEvent from "@testing-library/user-event";
import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  // const {user, timestamp, message} = tweet
  return (

    <div className="tweet">
      {/* <img
        src={user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />
      
      <div className="body">
        <div className="top">
          
        <User userData={props.tweet.user} />
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.handle}</span>
          </span> */}

          <span className="timestamp">{props.tweet.timestamp}</span>
          {/* <Timestamp time={props.tweet.timestamp} /> */}
        </div>

        <p className="message">
          {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

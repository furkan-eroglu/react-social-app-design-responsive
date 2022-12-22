import "./leftBar.scss"
import Friends from "../../assests/friends.png";
import Groups from "../../assests/groups.png";
import Marketplace from "../../assests/marketplace.png";
import Watch from "../../assests/watch.png";
import Memories from "../../assests/memories.png";
import Events from "../../assests/events.png";
import Gaming from "../../assests/gaming.png";
import Gallery from "../../assests/gallery.png";
import Videos from "../../assests/videos.png";
import Messages from "../../assests/messages.png";
import Fundraiser from "../../assests/fundraiser.png";
import Tutorials from "../../assests/tutorials.png";
import Courses from "../../assests/courses.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt=""></img>
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""></img>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt=""></img>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt=""></img>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt=""></img>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""></img>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt=""></img>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt=""></img>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt=""></img>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt=""></img>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt=""></img>
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fundraiser} alt=""></img>
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt=""></img>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt=""></img>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
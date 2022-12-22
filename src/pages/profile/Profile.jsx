import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.wallpaperscraft.com/image/single/autumn_river_sky_nature_91356_1920x1080.jpg" className="cover"/>
        <img src="https://images.pexels.com/photos/13780817/pexels-photo-13780817.jpeg" className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="facebook.com"><FacebookTwoToneIcon fontSize="large"/></a>
            <a href="instagram.com"><InstagramIcon fontSize="large"/></a>
            <a href="twitter.com"><TwitterIcon fontSize="large"/></a>
            <a href="linkedin.com"><LinkedInIcon fontSize="large"/></a>
            <a href="pinterest.com"><PinterestIcon fontSize="large"/></a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>lamb.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile
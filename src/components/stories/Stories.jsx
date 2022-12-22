import { useContext } from "react"
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/3375234/pexels-photo-3375234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/2916826/pexels-photo-2916826.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/1615818/pexels-photo-1615818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]

  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic}/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img}/>
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories
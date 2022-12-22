import { useContext } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authContext"


const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    const comments = [
        {
            id: 1,
            desc: "Ultricies mi eget mauris pharetra et ultrices neque ornare. Libero id faucibus nisl tincidunt eget nullam non nisi. Id diam vel quam elementum.",
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4775198/pexels-photo-4775198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Amet porttitor eget dolor morbi. Ultricies mi eget mauris pharetra et ultrices neque ornare.",
        },
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input placeholder="Write something..."></input>
                <button>Send</button>
            </div>
            
            {comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }
        </div>
    )
}

export default Comments
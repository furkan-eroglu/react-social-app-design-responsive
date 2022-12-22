import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {

  const posts = [
    {
        id: 1,
        name: "Jane Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Ultricies mi eget mauris pharetra et ultrices neque ornare. Libero id faucibus nisl tincidunt eget nullam non nisi. Id diam vel quam elementum.",
        img: "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        name: "Jane Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Amet porttitor eget dolor morbi. Ultricies mi eget mauris pharetra et ultrices neque ornare.",
    },
    {
        id: 3,
        name: "Jane Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "At elementum eu facilisis sed odio. Quis varius quam quisque id diam vel quam elementum pulvinar.",
        img: "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts
import Post from "../post/Post";

export default function Posts ({posts, chosenPost}) {
    return (
        <div>
            {
                posts.map(post => <Post chosenPost={chosenPost} post={post} key={post.id}/>)
            }
        </div>
    );
 }

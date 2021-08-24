import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";

export default function Posts(props) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fullPost() {
            let postsList = await getPosts()
            setPosts([...postsList])
        }

        fullPost()
    }, []);

    return (
        <div>
            {
                posts.map(post => <Post {...props} post={post} key={post.id}/>)
            }
        </div>
    );
}

import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);


    useEffect(() => {

        getPosts().then(value => setPosts([...value]))

    }, []);

    const chosenPost = (info) => {
        setPost({...info})

    }

    return (
        <div>
            {
                post && <div>
                    {post.body}
                </div>
            }
            <div>
                {
                    posts.map(value =>
                    <div>
                        <Post chosenPost={chosenPost} post={value} key={value.id}/>
                    </div>
                )}
                {post && <div>{post.id}</div>}
            </div>


        </div>

    );
}

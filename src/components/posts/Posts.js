import {getPosts} from "../../services/post.service";
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.id}-{post.title}</h3>
                    <Post id={post.id} />
                </div>
            ))}
        </div>
    );
}

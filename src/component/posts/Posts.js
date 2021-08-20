import {useEffect, useState} from "react";
import {getUserPosts} from "../../service/post.service";
import Post from "../post/Post";

export default function Posts ({userId}) {

        let [posts, setPosts] = useState([]);

            useEffect(() => {

getUserPosts(userId).then(value => setPosts([...value]))

                }, [userId]);

    return (
        <ul>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </ul>
    );
 }

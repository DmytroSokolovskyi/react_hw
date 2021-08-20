import {useEffect, useState} from "react";
import {getPost} from "../../services/post.service";

export default function Post({id}) {

    let [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(value => setPost(value));
    }, [id]);

    return (
        <div>
            {post.body}
        </div>
    );
}

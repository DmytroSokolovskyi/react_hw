import {useEffect, useState} from "react";
import {getComments} from "../../service/comment.service";
import Comment from "../comment/Comment";

export default function Comments({postId}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {

        getComments(postId).then(value => setComments([...value]))

    }, [postId]);


    return (
        <div><h4>Comments</h4>
           <ul>
               {comments.map(comment => <Comment id={comment.id} key={comment.id}/>)}
           </ul>
        </div>
    );
}

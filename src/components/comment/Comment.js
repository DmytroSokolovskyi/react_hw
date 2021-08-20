import {useEffect, useState} from "react";
import {getComment} from "../../services/comment.service";

export default function Comment ({id}) {

        let [comment, setComment] = useState({});

        useEffect(() => {
            getComment(id).then(value => setComment({...value}))
        },[id])

    return (
        <div>
            {comment.body}
        </div>
    );
 }

import {useEffect, useState} from "react";
import {getCommentsById} from "../../service/comment.service";

export default function Comment({id}) {

    let [comment, setComment] = useState({});
    console.log(comment);

    useEffect(() => {

        getCommentsById(id).then(value => setComment({...value}))

    }, [id]);

    return (
        <li>
            {comment.body}
        </li>
    );
}

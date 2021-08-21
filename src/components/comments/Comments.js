import './Comments.css'
import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";


export default function Comments() {
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);


    useEffect(() => {

        getComments().then(value => setComments([...value]))

    }, []);

    const chosenComment = (oneComment) => {
        setComment({...oneComment})

    }

    return (
        <div className={'main'}>

            <div className={'comments'}>
                {comments.map(value => <Comment chosenComment={chosenComment} comment={value} key={value.id}/>
                )}
            </div>

            {
                comment &&  <div className={'info'}>
                    {comment.body}
                </div>
            }

        </div>

    );
}

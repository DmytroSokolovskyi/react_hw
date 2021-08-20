import Comment from "../comment/Comment";

export default function Comments({comments}) {
    console.log(comments);
    return (
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
}

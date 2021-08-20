import Comments from "../comments/Comments";

export default function Post ({post:{id, title, body}}) {
    return (
        <li>
            <h4>{title}</h4><h6>{body}</h6>
            <Comments postId={id} />
        </li>
    );
 }

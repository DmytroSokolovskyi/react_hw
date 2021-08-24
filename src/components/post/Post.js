import {
    Link, Route,
} from "react-router-dom";
import PostDetails from "../postDetails/PostDetails";

export default function Post({post}) {
    // console.log(history)
    return (
        <div>
           <h3>
               {post.id} {post.title }
               <Link to={{pathname:`/posts/${post.id}`, state: post }} >details</Link>
           </h3>
            <Route path={'/posts/' + post.id} render={PostDetails} />
        </div>
    );
}

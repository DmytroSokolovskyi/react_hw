import Posts from "../posts/Posts";

export default function User ({user:{id, name}}) {
    return (
        <div>
            {id} {name} <h3>Posts</h3>  <Posts userId={id}/>
        </div>
    );
 }

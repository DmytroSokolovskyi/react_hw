import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";
import {getUserPosts} from "../../services/post.service";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import {getComments} from "../../services/comment.service";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);
    let [comments, setComments] = useState(null);


    useEffect(() => {

        getUsers().then(value => setUsers([...value]))

    }, []);


    const chosenUser = (id) => {
        getUserPosts(id).then(value => setPosts(value))
    };
    const chosenPost = (idPost) => {
        getComments(idPost).then(value => setComments([...value]))
    };
    return (

        <div className={'main'}>

            <div className={'users'}>
                {users.map(user => <User chosenUser={chosenUser} user={user} key={user.id}/>)}
            </div>


            {
                posts && <div className={'chosen'}>
                    <Posts posts={posts} chosenPost={chosenPost}/>
                </div>
            }

            {
                comments && <div className={'comments'}>
                    <Comments comments={comments}/>
                </div>
            }


        </div>

    )
}

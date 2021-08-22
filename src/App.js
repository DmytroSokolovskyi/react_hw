import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'


export default function App() {
    return (

        <Router>
            <div className={'main'}>
                <div className={'link'}>
                    <Link to={'/users-page'}>Users</Link>
                    <Link to={'/posts-page'}>Posts</Link>
                    <Link to={'/comments-page'}>Coments</Link>
                </div>

                <div>
                    <Route path={'/users-page'}> <Users/> </Route>
                    <Route path={'/posts-page'} render={() => <Posts/>} />
                    <Route path={'/comments-page'} component={Comments} />
                </div>

            </div>
        </Router>

    );
}

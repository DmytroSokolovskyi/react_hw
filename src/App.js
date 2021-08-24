import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import './App.css';


export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <div className={'link'}>
                        <Link to={'/users'}> Users </Link>
                        <Link to={'/posts'}> Posts </Link>
                        <Link to={'/'}> Home </Link>
                    </div>
                    <div>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                    </div>
                </div>
            </Router>
        </div>
    );
}
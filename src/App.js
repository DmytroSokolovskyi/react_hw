import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import './App.css'

export default function App() {

    return (
        <Router>
            <div>
                <div className={'link'}>
                    <Link to={'/users'}> Users</Link>
                    <Link to={'/cars'}>Cars</Link>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/cars'} component={Cars}/>
                </div>
            </div>
        </Router>
    );
}

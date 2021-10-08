import Users from "./components/users/Users";
import {usersList} from "./data/data";

export default function App () {
    return (
        <div>
            <Users usersList={usersList} />
        </div>
    );
 }

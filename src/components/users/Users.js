import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";

export default function Users(props) {
    let {match: {url}, history} = props;
    console.log(history);

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);
    return (
        <div>
            {
                users.map(user => <User history={history} key={user.id} user={user}/>)
            }
            <Route path={`${url}/:id`} render={(props) =>{
                return <UserDetails props={props} />
            }}/>
        </div>
    );
}

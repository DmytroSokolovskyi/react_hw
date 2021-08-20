import {getUsers} from "../../services/user.service";
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);
    return (
        <div>
            {
                users.map(user => (
                    <div key={user.id}>
                        {user.id}-{user.name}
                        <User id={user.id}/>
                    </div>

                ))
            }
        </div>
    );
}

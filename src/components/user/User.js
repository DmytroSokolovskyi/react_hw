import {useEffect, useState} from "react";
import {getUser} from "../../services/user.service";

export default function User({id}) {

    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    },[id]);


    return (
        <div>
            {user.name} {user.email}
        </div>
    );
}

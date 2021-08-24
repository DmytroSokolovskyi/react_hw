import {useEffect, useState} from "react";
import {getUser} from "../../services/user.service";

export default function UserDetails({props: {match: {params: {id}}}}) {
    let [user, setUser] = useState({});

    useEffect(() => {
getUser(id).then(value => setUser({...value}))
    }, [id]);

    return (
        <div>
            {user.name}
            {user.username}
            {user.email}
            {user.phone}
            {user.website}
        </div>
    );
}

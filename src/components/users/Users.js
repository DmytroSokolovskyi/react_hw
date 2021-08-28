import {useDispatch, useSelector} from "react-redux";
import User from "../user/User";
import {getUsers} from "../../services/user.service";
import UserForm from "../userForm/UserForm";
import {useEffect} from "react";
import {setUsers} from "../../redux/actions";

export default function Users() {

    const {users} = useSelector(state => state.usersReducer);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {

        getUsers().then(value => dispatch(setUsers(value)))
    }, []);


    return (
        <div>

            <div>
                <UserForm/>
            </div>

            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>

    );
}

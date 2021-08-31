import {useEffect} from "react";
import {getUserInfo, getUsers} from "../../services/users.service";
import {useDispatch, useSelector} from "react-redux";
import User from "../user/User";
import UserForm from "../userForm/UserForm";

export default function Users() {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    const choseUser = async (id) => {
         dispatch(getUserInfo(id))
    };

    return (
        <div>
            <div>
                <UserForm/>
            </div>
            <div>
                {users.map(value => <User choseUser={choseUser} key={value.id} user={value}/>)}
            </div>
        </div>

    );
}

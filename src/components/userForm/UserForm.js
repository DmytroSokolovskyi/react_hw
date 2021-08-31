import {useState} from "react";
import {useDispatch} from "react-redux";
import {setOneUser} from "../../services/users.service";

export default function UserForm () {
    let [user, setUser] = useState({name: '', username: ''});
    const dispatch = useDispatch();


    const userForm = (e) => {
        setUser({...user, [e.target.name]: e.target.value})

    };


    const userToSet = (e) => {
        e.preventDefault()
      dispatch(setOneUser(user))
    };
    return (
        <div>
            <form onSubmit={userToSet}>
                <input type="text" name={'name'} value={user.name} onChange={userForm} placeholder={'name'}/>
                <input type="text" name={'username'} value={user.username} onChange={userForm} placeholder={'username'}/>
                <input type="submit"/>
            </form>
        </div>
    );
 }

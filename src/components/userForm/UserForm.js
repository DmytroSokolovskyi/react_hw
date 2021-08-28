import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveUser} from "../../services/user.service";
import {setOneUser} from "../../redux/actions";

export default function UserForm() {

    let [user, setUser] = useState({name: '', username: ''});
    const dispatch = useDispatch();


    const userForm = (e) => {
        setUser({...user, [e.target.name]: e.target.value})

    };


    const userFromForm = (e) => {
        e.preventDefault()
        saveUser(user).then(value => dispatch(setOneUser(value)));
    };
    return (
        <div>
            <form onSubmit={userFromForm}>
                <input type="text" name={'name'} value={user.name} onChange={userForm}/>
                <input type="text" name={'username'} value={user.username} onChange={userForm}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

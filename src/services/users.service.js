import {setFormUser, setUserInfo, setUsers} from "../redux";

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => (dispatch) => {
    fetch(url)
        .then(value => value.json())
        .then(value => dispatch(setUsers(value)));
};

const setOneUser = (user) => (dispatch) => {
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(value => value.json()).then(value => dispatch(setFormUser(value)))
};

const getUserInfo = (id) => (dispatch) => {
    fetch(`${url}/${id}`)
        .then(value => value.json())
        .then(value => dispatch(setUserInfo(value)));
};


export {getUsers, setOneUser, getUserInfo}

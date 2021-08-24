import {useHistory} from "react-router";

export default function User({user, history}) {
    // const history = useHistory();
    // console.log(history);

    const goToDetails = () => {
        history.push('/users/' + user.id, user)
    };

    return (
        <div>
            {user.id} {user.name}
            <button onClick={goToDetails}>details</button>
        </div>
    );
}

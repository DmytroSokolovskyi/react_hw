import {useSelector} from "react-redux";
import UserInfo from "../userInfo/UserInfo";

export default function User({user, choseUser}) {
    const hidden = (user.id > 10)

    const {userInfo} = useSelector(state => state);
    const moreInfo = () => {
        choseUser(user.id)
    };


    return (
        <div>
            <div>
                <h3> {user.id} {user.name} </h3>
                username : {user.username}
                <button onClick={moreInfo} hidden={hidden}>More Info</button>
            </div>
            {userInfo && userInfo.id === user.id && <div><UserInfo userInfo={userInfo}/></div> }
        </div>
    );
}

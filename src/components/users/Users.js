import User from "../user/User";

export default function Users({usersList}) {
    console.log(usersList);
    return (
        <div>
            <User user={usersList[0]}/>
            <User user={usersList[1]}/>
            <User user={usersList[2]}/>
            <User user={usersList[3]}/>
            <User user={usersList[4]}/>
            <User user={usersList[5]}/>
            <User user={usersList[6]}/>
            <User user={usersList[7]}/>
            <User user={usersList[8]}/>
            <User user={usersList[9]}/>
        </div>
    );
}

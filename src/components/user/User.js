export default function User ({user, chosenUser}) {

    const onClickUser = () => {
        chosenUser(user.id)
    };

    return (
        <div>
            {user.id} {user.name}
            <button onClick={onClickUser} >POSTS</button>
        </div>
    );
 }

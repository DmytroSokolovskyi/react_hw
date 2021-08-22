export default function User({user}) {
    return (
        <div>
           <h3>{user.id} {user.name}</h3>  {user.email}
        </div>
    );
}

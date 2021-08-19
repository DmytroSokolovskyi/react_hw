import Address from "../address/Address";

export default function User({user}) {
    console.log(user);
    return (
        <div>
            <h3>{user.name} {user.username}</h3>
            <h4>{user.email}</h4>
            Address
            <Address address={user.address}/>
        </div>
    );
}

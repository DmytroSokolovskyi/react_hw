export default function User ({user:{id, name, username}}) {
    return (
        <div>
            {id} {name} {username}
        </div>
    );
 }

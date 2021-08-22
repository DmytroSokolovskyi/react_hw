export default function Comment ({comment: {id, name, body}}) {
    return (
        <div>
            <h3>{id} {name}</h3> {body}
        </div>
    );
 }

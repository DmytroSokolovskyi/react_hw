export default function Comment ({comment:{id, name, body}}) {
    return (
        <div>
           <h4>{id} {name}</h4>
            {body}
        </div>
    );
 }

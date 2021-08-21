export default function Comment ({ chosenComment, comment, comment:{id, name}}) {
    const chosen = () => {
        chosenComment(comment)
    };

    return (
        <div>
           <strong>{id} {name}</strong> <button onClick={chosen}>details</button>
        </div>
    );
 }

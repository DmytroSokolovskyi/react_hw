export default function PostDetails ({history: {location: {state}}}) {
    console.log(state);
    return (
        <div>
            {state.body}
        </div>
    );
 }

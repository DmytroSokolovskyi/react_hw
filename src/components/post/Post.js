export default function Post ( { chosenPost, post:{id, title, body}}) {
    const chosenComment = () => {
        chosenPost(id)
    };

    return (
        <div>
           <h4>
               {id} {title}
               <button onClick={chosenComment}> Comments to post </button>
           </h4>
            {body}
        </div>
    );
 }

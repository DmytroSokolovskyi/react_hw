export default function Post ( { chosenPost,post, post:{id, title}}) {
    const detailsPost = () => {
        chosenPost(post)
    };

    return (
        <div>
           <h4>
               {id} {title}
               <button onClick={detailsPost}> Details </button>
           </h4>
        </div>
    );
 }

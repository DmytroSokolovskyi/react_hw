export default function Post (item) {
    let {post:{id, title, body }} = item;
    return (
        <div>
           <h3>{id} {title}</h3>  {body}
        </div>
    );
 }

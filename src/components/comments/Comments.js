import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";

export default function Comments() {

    let [coments, setComents] = useState([]);

    useEffect(() => {
        getComments().then(value => setComents([...value]));
    }, []);

    return (
        <div>
            {coments.map(coment => (
                <div key={coment.id}>
                    <h3>
                        {coment.id} {coment.name}
                    </h3>
                    <Comment id={coment.id}/>
                </div>
            ))}
        </div>
    );
}

import Geo from "../geo/Geo";

export default function Address ({address}) {
    console.log(address);
    return (
        <ul>
            <li>{address.street}</li>
            <li>{address.suite}</li>
            <li>{address.city}</li>
            <li>{address.zipcode}</li>
            <li>
                <Geo geo={address.geo}/>
            </li>
        </ul>
    );
 }

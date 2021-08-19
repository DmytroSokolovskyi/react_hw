import Simpsons from "./components/simpsons/Simpsons";
import {simpsons} from "./data";

export default function App () {
    return (
        <div>
            <Simpsons simpsons={simpsons} />
        </div>
    );
 }

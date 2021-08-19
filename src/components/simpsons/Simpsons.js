import Simpson from "../simpson/Simpson";
import './Simpsons.css'

export default function Simpsons ({simpsons}) {
    console.log(simpsons);
    return (
        <div className={'simpsons'}>
            <Simpson simpson={simpsons[0]} />
            <Simpson simpson={simpsons[1]} />
            <Simpson simpson={simpsons[2]} />
            <Simpson simpson={simpsons[3]} />
            <Simpson simpson={simpsons[4]} />
        </div>
    );
 }

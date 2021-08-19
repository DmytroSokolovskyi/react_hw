export default function Simpson ({simpson}) {
    return (
        <div>
            <h3>{simpson.name} {simpson.surname} age - {simpson.age}</h3>
            <div> {simpson.info} </div>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
 }

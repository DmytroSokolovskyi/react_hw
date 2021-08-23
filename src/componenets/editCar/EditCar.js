import {useEffect, useState} from "react";
import {editCar} from "../../services/car.service";

export default function EditCar({carToEdit, carToEdit: {id}}) {

    let [car, setCar] = useState({model: '', price: '', year: ''});

    useEffect(() => {
        setCar(carToEdit);
    }, [carToEdit]);


    const inputCar = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    };

    const saveEditCar = (e) => {
        e.preventDefault()
        editCar(id, car)
    };

    return (
        <div>
            <form onSubmit={saveEditCar}>
                <input type="text" name={'model'} value={car.model} onChange={inputCar}/>
                <input type="text" name={'price'} value={car.price} onChange={inputCar}/>
                <input type="text" name={'year'} value={car.year} onChange={inputCar}/>
                <input type="submit"/>

            </form>
        </div>
    );
}

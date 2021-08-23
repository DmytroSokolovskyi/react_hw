import {useEffect, useState} from "react";
import {editCarForId, saveCar} from "../../services/car.service";

export default function Form({car}) {

    let [editCar, setEditCar] = useState({model: '', price: '', year: ''});


    useEffect(() => {
        setEditCar({...car})
    }, [car]);



    const carChange = (e) => {
        setEditCar({...editCar, [e.target.name]: e.target.value})
    };


    const saveFormCar = (e) => {
        e.preventDefault();
        if (car.id) {
            editCarForId(car.id, editCar).then((response) => console.log(response))
        } else {
            saveCar(editCar)
        }
    }


    return (
        <div>
            <form onSubmit={saveFormCar}>
                <input type="text" name={'model'} value={editCar.model} onChange={carChange} maxLength={20}/>
                <input type="number" name={'price'} value={editCar.price} onChange={carChange} min={0}/>
                <input type="number" name={'year'} value={editCar.year} onChange={carChange} min={1990} max={2021}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

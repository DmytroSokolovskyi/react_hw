import {useState} from "react";
import {saveCar} from "../../services/car.service";

export default function CreateCar() {

    let [car, setCar] = useState({model: '', price: '', year: ''});

    const inputCar = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    };
    console.log(car);
    const saveFormCar = (e) => {
        e.preventDefault()
        saveCar(car)
    };


    return (
        <div>
            <form onSubmit={saveFormCar}>
                <input type="text" name={'model'} value={car.model} onChange={inputCar}/>
                <input type="text" name={'price'} value={car.price} onChange={inputCar}/>
                <input type="text" name={'year'} value={car.year} onChange={inputCar}/>
                <input type="submit"/>

            </form>
        </div>
    );
}

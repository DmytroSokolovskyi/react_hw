import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {editOneFormCar, saveFormCar} from "../../redux/actions";
import {editCar, saveCar} from "../../services/cars.service";

export default function FormEditCar({choseCar}) {
    let [car, setCar] = useState({model: '', price: '', year: ''});
    const dispatch = useDispatch();
    useEffect(() => {
        setCar(choseCar)
    }, [choseCar]);

    const submitCar = (e) => {
        e.preventDefault()
        if (choseCar.id) {
            editCar(car).then(value =>  dispatch(editOneFormCar(value)))
        } else {
            saveCar(car).then(value => dispatch(saveFormCar(value)))
        }
    };
    const editFormCar = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    };

    return (
        <div>
            <form onSubmit={submitCar}>
                <input type="text" name={'model'} value={car.model} onChange={editFormCar}/>
                <input type="text" name={'price'} value={car.price} onChange={editFormCar}/>
                <input type="text" name={'year'} value={car.year} onChange={editFormCar}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

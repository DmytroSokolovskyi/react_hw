import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import SelectCar from "../selectCar/SelectCar";
import EditCar from "../editCar/EditCar";
import './UpdateCar.css'

export default function UpdateCar() {
    let [cars, setCars] = useState([]);
    let [carToEdit, setCarToEdit] = useState(null);

    useEffect(() => {

        getCars().then(value => setCars([...value]))

    }, []);

    const selectedCar = (e) => {
        const carId = e.target.value;
        console.log(carId);
        const findCar = cars.filter(value => carId == value.id)[0];
        console.log(findCar);
        setCarToEdit({...findCar})
    };

    console.log(carToEdit);

    return (
        <div className={'forms'}>
            <div>
                <select name="selectCars" onChange={selectedCar}>
                    {
                        cars.map(car => <SelectCar selectedCar={selectedCar} key={car.id} car={car}/>)
                    }
                </select>
            </div>
            <div>
                {
                 carToEdit &&  <EditCar carToEdit={carToEdit}/>
                }
            </div>
        </div>
    );
}

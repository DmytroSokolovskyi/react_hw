import {useEffect, useState} from "react";
import {getAllCar} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars () {
        let [cars, setCars] = useState([]);

            useEffect(() => {
            getAllCar().then(value => setCars([...value]))
                }, []);

    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
 }

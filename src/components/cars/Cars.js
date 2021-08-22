import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../../services/car.service";
import Car from "../car/Car";
import Form from "../form/Form";

export default function Cars() {

    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars]);

    const choseEditCar = (editCar) => {
        setCar({...editCar})
    };

    const choseDeleteCar = ({id}) => {
        deleteCar(id);
        const filterArray = cars.filter(value => value.id !== id);
        setCars([...filterArray])
        console.log(filterArray)
    };

    const metka = false;

    return (
        <div>

            <Form car={car} metka={metka}/>


            {
                cars.map(car => <Car
                    choseEditCar={choseEditCar}
                    choseDeleteCar={choseDeleteCar}
                    car={car}
                    key={car.id}/>)
            }
        </div>
    );
}

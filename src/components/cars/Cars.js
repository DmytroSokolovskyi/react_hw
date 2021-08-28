import {useDispatch, useSelector} from "react-redux";
import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.service";
import {getAllCars} from "../../redux/actions";
import FormEditCar from "../formEditCar/FormEditCar";


export default function Cars() {

    const {cars} = useSelector(state => state.carsReducer);
        let [choseCar, setChoseCar] = useState({});


    const dispatch = useDispatch();

    useEffect(() => {
        getCars().then(value => dispatch(getAllCars(value)) )
    }, []);

     const  choseOneCar = (car) => {
         setChoseCar({...car})
    };

    return (
        <div>
            <div>
                <FormEditCar choseCar={choseCar}/>
            </div>
            <div>
                {
                    cars.map(car => <Car choseOneCar={choseOneCar} key={car.id} car={car}/>)
                }
            </div>

        </div>
    );
}

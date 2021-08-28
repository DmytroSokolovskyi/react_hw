import {useDispatch, useSelector} from "react-redux";
import Car from "../car/Car";
import {useEffect} from "react";
import {getCars} from "../../services/cars.service";
import {getAllCars} from "../../redux/actions";


export default function Cars() {

    const {cars} = useSelector(state => state.carsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        getCars().then(value => dispatch(getAllCars(value)) )
    }, []);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

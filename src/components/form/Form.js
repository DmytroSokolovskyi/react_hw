import {useState} from "react";
import {editCarForId, saveCar} from "../../services/car.service";

export default function Form({car}) {

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');


    let editCar = {model: model, price: price, year: year};



    const modelChange = (e) => {
        setModel(e.target.value)
        car.model = null;
    };

    const priceChange = (e) => {
        setPrice(e.target.value)
        car.price = null;
    };
    const yearChange = (e) => {
        setYear(e.target.value)
        car.year = null;
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
                <input type="text" name={'model'} value={car.model || model} onChange={modelChange} maxLength={20} />
                <input type="number" name={'price'} value={car.price || price} onChange={priceChange} min={0}/>
                <input type="number" name={'year'} value={car.year || year} onChange={yearChange} min={1990} max={2021}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

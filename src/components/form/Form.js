import {useState} from "react";
import {saveCar} from "../../services/car.service";

export default function Form() {
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');


    const modelChange = (e) => {
        setModel(e.target.value)
    };

    const priceChange = (e) => {
        setPrice(e.target.value)
    };

    const yearChange = (e) => {
        setYear(e.target.value)
    };


    const toSend = {model: model, price: price, year: year};

    const saveFormCar = (e) => {
        e.preventDefault();
        saveCar(toSend);
    };


    return (
        <div>
            <form onSubmit={saveFormCar}>
                <input type="text" name={'model'} value={model} onChange={modelChange}/>
                <input type="text" name={'price'} value={price} onChange={priceChange}/>
                <input type="text" name={'year'} value={year} onChange={yearChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
};

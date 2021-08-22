export default function Car ({choseEditCar, choseDeleteCar, car, car: {id, model, price, year}}) {

    const editCar = () => {
        choseEditCar(car)
    };

    const deleteCar = () => {
        choseDeleteCar(car)
    };
    return (
        <div>
            {id} <strong>{model} {price} {year}</strong>
            <button onClick={deleteCar}>delete</button>
            <button onClick={editCar}>edit</button>
        </div>
    );
 }

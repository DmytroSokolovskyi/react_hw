export default function Car({choseOneCar, car, car: {id, model, price, year}}) {

    const editThisCar = () => {
        choseOneCar(car)
    };

    return (
        <div>
            {id} {model} {price} {year}
            <button onClick={editThisCar}>Edit</button>
        </div>
    );
}

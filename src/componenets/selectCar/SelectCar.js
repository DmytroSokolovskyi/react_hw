export default function SelectCar({car, car: {model, price, year}}) {

    return (
        <option value={car.id}>{model} {price} {year}  </option>
    );
}

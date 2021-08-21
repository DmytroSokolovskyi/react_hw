const url = 'http://195.72.144.67/api/v1/cars';

const getAllCar = () => {
    return fetch(url)
        .then(value => value.json())
};

const saveCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
    export {saveCar, getAllCar};
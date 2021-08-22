const url = 'http://91.201.233.14/api/v1/cars';


const getCars = () => {
    return fetch(url).then(value => value.json())
};

const deleteCar = (id) => {
    return fetch(
        `${url}/${id}`,
        {method: 'DELETE'}
    )
        .then((response) => console.log(response))
};
const editCarForId = (id ,car) => {
    console.log(id);
    console.log(car);
    return fetch(
        `${url}/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(car),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        },
    )
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

export {getCars, deleteCar, editCarForId, saveCar};
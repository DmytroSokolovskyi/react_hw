const url = 'http://91.201.233.14/api/v1/cars';

const getCars = () => {
    return fetch(url)
        .then(value => value.json());
};

export {getCars};
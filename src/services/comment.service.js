const url = 'https://jsonplaceholder.typicode.com';

const getComments = (id) => {

    return fetch(`${url}/posts/${id}/comments`)
        .then(value => value.json());
};

export {getComments};
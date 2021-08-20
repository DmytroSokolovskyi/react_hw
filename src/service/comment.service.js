const url = 'https://jsonplaceholder.typicode.com';

const getComments = (id) => {
    return fetch(`${url}/post/${id}/comments`).then(value => value.json());
};

const getCommentsById = (id) => {
    return fetch(`${url}/comments/${id}`).then(value => value.json());
};

export {getComments, getCommentsById}
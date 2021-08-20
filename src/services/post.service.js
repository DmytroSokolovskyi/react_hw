const url = 'https://jsonplaceholder.typicode.com/users';

const getUserPosts = (id) => {

    return fetch(`${url}/${id}/posts`)
        .then(value => value.json());
};

export {getUserPosts};
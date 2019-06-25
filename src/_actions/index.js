const addUsers = users => ({
  type: 'ADD_USERS',
  users
})

const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users');
}

const getUsers = () => {
  return function(dispatch) {
    return fetchUsers()
      .then(response => {
        return response.json();
      })
      .then(users => {
        dispatch(addUsers(users))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default getUsers;

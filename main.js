const getUsersButton = document.createElement('button');
getUsersButton.textContent = "Get users";
document.body.appendChild(getUsersButton);

const addUsersButton = document.createElement('button');
addUsersButton.textContent = "Add user";
document.body.appendChild(addUsersButton);

const deleteUsersButton = document.createElement('button');
deleteUsersButton.textContent = "Delete user";
document.body.appendChild(deleteUsersButton);

const updateUsersButton = document.createElement('button');
updateUsersButton.textContent = "Update user";
document.body.appendChild(updateUsersButton);

const container = document.createElement('div');
container.classList.add('container');
document.body.insertAdjacentElement('beforeend' , container);

function renderUsers(users) {
    users.map((user) => {
        container.innerHTML += `<p><b>User id: ${user.id}</b></p>
                                <p>User name: ${user.name}</p>
                                <p>User score: ${user.score}</p>`   
    })
}

const getUsers = () => {
    fetch('http://fecore.net.ua/rest/')
    .then((response) => response.json())
    .then((data) => renderUsers(data))   
    .catch(error => console.error('Error:', error))
}
getUsersButton.addEventListener('click', getUsers);

const newUser = {name: "Kolya", score: "100500"}

const addUser = () => {
    fetch('http://fecore.net.ua/rest/', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: new Headers({
            'Content-Type': 'aplication/json'
        })
    })
    .then((response) => response.json())
    .catch(error => console.error('Error', error))
    .then((res) => console.log(res))
}
addUsersButton.addEventListener('click', addUser);

const userId = 61;
const deleteUser = (userId) => {
    fetch('http://fecore.net.ua/rest/' + userId, {
        method: 'DELETE',
        body: JSON.stringify(userId),
        headers: new Headers({
            'Content-Type': 'aplication/json'
        })
    })
    .then((response) => response.json())
    .catch(error => console.error('Error', error))
    .then((res) => console.log(res))
}
deleteUsersButton.addEventListener('click', deleteUser);

const updateUser = (userId) => {
    fetch('http://fecore.net.ua/rest/' + userId, {
        method: 'PUT',
        body: JSON.stringify(userId),
        headers: new Headers({
            'Content-Type': 'aplication/json'
        })
    })
    .then((response) => response.json())
    .catch(error => console.error('Error', error))
    .then((res) => console.log(res))
}
updateUsersButton.addEventListener('click', deleteUser);
import axios from 'axios'

function getAll() {
    return axios.get('/api/todos')
}

function add(text) {
    return axios.post('/api/todos/add', {text: text})
}

function update(todo) {
    return axios.put('/api/todos/update', todo)
}


export default {
    getAll,
    add,
    update
};

import axios from 'axios';


const api ='https://jsonplaceholder.typicode.com';

export function requestGetTasks () {
    return  axios.get(api + '/todos');
};
  
export function requestPostTasks (title) {
    return axios(api + '/posts', {
        method: 'POST',
        data: JSON.stringify({
          title: title,
          body: title,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  };

    
export function requestUpdateTask (card) {
  return axios(api + '/posts/' + card.id, {
    method: 'PUT',
    data: JSON.stringify({
      completed: card.completed
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
};

export function deteleTask (id) {
  return  axios(api + '/posts/'+ id, {
    method: 'DELETE',
  })
};
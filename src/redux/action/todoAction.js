import axios from "axios";


export const getTodos = () => {
	return (dispatch) => {
		axios('https://643cd4c96afd66da6ae57f22.mockapi.io/my-api/todos')
			.then(({data}) => {
				dispatch({type: 'GET_TODOS', payload: data})
			})
	}
}

// payload - данные с бэка


export const deleteTodos = (id) => {
	return (dispatch) => {
		axios.delete(`https://643cd4c96afd66da6ae57f22.mockapi.io/my-api/todos/${id}`)
			.then(({data}) => {
				dispatch({type: 'DELETE_TODOS', payload: data})
			})
	}
}


export const addTodos = (text) => {
	return (dispatch) => {
		axios.post(`https://643cd4c96afd66da6ae57f22.mockapi.io/my-api/todos`)
			.then(({data}) => {
				console.log(data, 'DATA')
				const a = data.text = text
				dispatch({type: 'ADD_TODOS', payload: a })
			})
	}
}
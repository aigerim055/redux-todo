
const initialState = {
	todos: []
}

export default  function TodosReducer( state = initialState, action ) {
	switch (action.type) {
		case 'GET_TODOS':
			return {...state, todos: action.payload}
		case 'DELETE_TODOS':
			return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}
		case 'ADD_TODOS':
			const newTodo = {
				"text": action.payload,
				"employed": false,
				"id": state.todos.length + 1,
				"completed": false
			}
			console.log(state.todos, 'TODOS')
			return {...state, todos: state.todos.push(newTodo)
				}
		default:
			return state
	}
}
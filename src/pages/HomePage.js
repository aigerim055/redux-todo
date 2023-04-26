import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodos, deleteTodos, getTodos} from "../redux/action/todoAction";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";

const HomePage = () => {
	
	const dispatch = useDispatch() // отправляет запрос
	const todos = useSelector(state => state.todos) // получает данные
	
	// console.log(todos)
	useEffect(() => {
		dispatch(getTodos())
	}, [])
	
	const handleDelete = (id) => {
		dispatch(deleteTodos(id))
	}
	
	const handleAddTodo = (text) => {
		// console.log(text)
		dispatch(addTodos(text))
	}
	
	
	
	const [todo, setTodo] = useState('')
	
	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px'}}>
			
			<div>
				<h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>todolist</h1>
				<div style={{
					display: 'flex',
					marginBottom: '10px',
					gap: '10px'
				}}>
					<input type="checkbox" />
					<input type="text" style={{padding: '15px 70px'}}
					       // value={todo}
					       onChange={(e) => setTodo(e.target.value)}
					       // onKeyPress={handleAddTodoEnter}
					/>
					<button className={'add'}
					        onClick={() => handleAddTodo(todo)}
					>
						{/*{*/}
						{/*	!edit ? 'add' : 'edit'*/}
						{/*}*/}
						add
					</button>
				
				</div>
				{
					todos?.map((todo) => (
						<div key={todo.id} style={{display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '10px'}}>
							<input type="checkbox"
							       style={{padding: '5px'}}
							       // onChange={(event) => handleComplete(todo.id, event)}
							       // checked={todo.completed}
							/>
							<div
								// className={`${todo.completed ? 'completed': ''}`
							     style={{
								     padding: '20px',
								     border: '1px black solid',
								     display: 'flex',
								     justifyContent: 'space-between',
								     width: '100%',
								     alignItems: 'center',
							     }}>
								<span>{todo.text}</span>
								<div style={{
									display:'flex',
									alignItems:'center'
								}}>
									{
										// !todo.completed &&
										<button style={{
											border: 'none',
											background: 'unset',
											cursor: 'pointer'
										}}
										        // onClick={() => handleEdit(todo)}
										>
											<EditIcon/>
										</button>
									}
									<button style={{
										border: 'none',
										background: 'unset',
										cursor: 'pointer'
									}}
									        onClick={() => handleDelete(todo.id)}
									>
										<DeleteIcon/>
									</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default HomePage;
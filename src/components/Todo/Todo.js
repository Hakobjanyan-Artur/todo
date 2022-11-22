import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../Img/Img';
import { fetchTodos } from '../../store/Slices/todos/todosAPI';
import { checkTodo, delItem, editId, loadTodos } from '../../store/Slices/todos/todosSlice';
import { toggleTxt } from '../../store/Slices/txt/txtSlice';
import './Todo.css'
const Todo = () => {
    const {todos} = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

    return (
            <div>
            {todos.map(todo => <div key={todo.id} className='todo'>
                <div className="chekbox">
                  <input type="checkbox" 
                  checked={todo.isChek}
                  onChange={() => dispatch(checkTodo(todo.id))}/>
                </div>
                <div className="txt"
                style={{
                    textDecoration: todo.isChek ? 'line-through' : ''
                }}
                >
                  {todo.txt}
                </div>
                <div className="del-edit">
                    <div className="del"
                    onClick={() => dispatch(delItem(todo.id))}>
                        <img src={img.trash} alt="" />
                    </div>
                    <div className="edit"
                    onClick={() => {dispatch(editId(todo.id)); dispatch(toggleTxt(todo.txt))}}>
                        <img src={img.pencil} alt="" />
                    </div>
                </div>
            </div>)}
          </div>
    );
}

export default Todo;
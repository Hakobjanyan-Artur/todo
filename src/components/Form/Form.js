import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTxt, selectTodos } from '../../store/Slices/todos/todosSlice';
import { resetTxt, selectTxt, toggleTxt } from '../../store/Slices/txt/txtSlice';
// import img from '../../Img/Img';
import './Form.css'
const Form = () => {
    
    const dispatch = useDispatch()
    const txt = useSelector(selectTxt)
    const {editId} = useSelector(selectTodos)
    
    const handleSubmit = (e) => {
        e.preventDefault()
          if (!editId) {
            dispatch(addTodo(txt)) 
          }
          else {
            dispatch(editTxt(txt)) 
          } 
        dispatch(resetTxt()) 
      }
    return (
        <div className='forms'>
            <form onSubmit={handleSubmit}>
            <input value={txt} onChange={(e) => dispatch(toggleTxt(e.target.value))} type="text" />
            {/* <input className='send' type="image" src={img.send} alt="" />   */}
            <button className='send' > <div className="sendText">{editId ? 'edit' : 'Add'}</div></button>
          </form>
        </div>
    );
}

export default Form;
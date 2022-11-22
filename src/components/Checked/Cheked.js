import React from 'react';
import { useDispatch } from 'react-redux';
import { delChecked, todoFilter } from '../../store/Slices/todos/todosSlice';
import './Checked.css'

const Cheked = () => {
    const dispatch = useDispatch()
    return (
        <div className='checked'>
            <button
            onClick={() => dispatch(todoFilter())}>
            Filter
            </button>
            <button
            onClick={() => dispatch(delChecked())}>
            Del-Check
            </button>
        </div>
    );
}

export default Cheked;

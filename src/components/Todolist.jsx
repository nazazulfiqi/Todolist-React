import React, { useRef, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addTodoList, completeTodoList, removeTodoList, updateTodoList } from '../redux/reducer';

const mapStateToProps = (state) => {
    return{
        todos: state,
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodoList(obj)),
        removeTodo: (id) => dispatch(removeTodoList(id)),
        updateTodo: (obj) => dispatch(updateTodoList(obj)),
        completeTodo: (id) => dispatch(completeTodoList(id)),
    }
}

function Todolist(props) {
    const [todo, setTodo] = useState("")
    
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    


    console.log("Props from store", props);
  return (
    <div className='addTodoList mt-2'>
    <input type="text" onChange={(e) => handleChange(e)} className='input-todo' placeholder='What to do'/>
    <button className='btn btn-dark btn-add ms-1' onClick={() => props.addTodo({
        id: Math.floor(Math.random()*1000),
        item:todo,
        completed: false,
    })}>Add</button>

    <br />
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist)
import React, { useRef } from "react";
import iconEdit from '../assets/pen-fill.svg'
import iconChecklist from '../assets/check.svg'
import iconDelete from '../assets/trash-fill.svg'

const TodoItem = (props) => {
    const {item,updateTodo,completeTodo,removeTodo} = props;
    const inputRef = useRef(true)
    const focusChange = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const update = (id,value,e) => {
        if(e.which === 13){
            updateTodo({id, item:value})
            inputRef.current.disabled = true
        }
    }
  return (
      <li key={item.id} className="card mt-3 mx-auto">
        <textarea
        className="text-area"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />

        <div className="btn-action">
        <button onClick={() => focusChange()} className="btn btn-light"><img src={iconEdit} alt="" width={20}/></button>
        <button onClick={() => props.completeTodo(item.id)} className="btn btn-light"><img src={iconChecklist} alt="" width={35}/></button>
        <button onClick={() => props.removeTodo(item.id)} className="btn btn-light"><img src={iconDelete} alt="" width={20}/></button>
        </div>
      </li>
  );
};

export default TodoItem;

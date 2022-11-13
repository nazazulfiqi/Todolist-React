import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodoList,
  completeTodoList,
  removeTodoList,
  updateTodoList,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodoList(obj)),
    removeTodo: (id) => dispatch(removeTodoList(id)),
    updateTodo: (obj) => dispatch(updateTodoList(obj)),
    completeTodo: (id) => dispatch(completeTodoList(id)),
  };
};

const ShowTodo = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="showtodos">
      <div className="buttons mt-4">
        <button onClick={() => setSort("all")} className="btn btn-dark">All</button>
        <button onClick={() => setSort("active")} className="ms-4 btn btn-dark">Active</button>
        <button onClick={() => setSort("completed")} className="ms-4 btn btn-dark">Completed</button>
      </div>
      <ul className="p-0">
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);

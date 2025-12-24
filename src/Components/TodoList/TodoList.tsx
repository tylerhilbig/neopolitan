import React from "react";
import "./TodoList.css";


const TodoList: React.FC = () => {
return (
    <>
    <div className="todo-content">
    <h2>TODO</h2>
    <div>
        <ul className="todo-list">
            <li>Empty trash</li>
            <li>Feed Raccoon</li>
        </ul>
    </div>
    </div>
    </>

);
};







export default TodoList;
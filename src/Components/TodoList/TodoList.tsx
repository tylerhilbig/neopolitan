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
            <li>File Taxes</li>
            <li>Threaten Hank</li>
            <li>Steal methlamine</li>
            <li>Visit Hector</li>
            <li>Lie to Skylar</li>
            <li>Bury money</li>
        </ul>
    </div>
    </div>
    </>

);
};







export default TodoList;
import React from "react";
import ProductivityTimer from "./Components/Timers/ProductivityTimer"
import BreakTimer from "./Components/Timers/BreakTimer";
import TodoList from "./Components/TodoList/TodoList";
import ProductivityStats from "./Components/Stats/ProductivityStats";
import "./App.css";


function App() {

  return (
    <div className="dashboard">
      
      <div className="main-section">
        <div className="timers">
          <ProductivityTimer />
          <BreakTimer />
        </div>
        <TodoList />
      </div>

      <div className="sidebar">
        <ProductivityStats />
      </div>
      
    </div>
  );
}

export default App

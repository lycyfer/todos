import { useState } from "react";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskFilter } from "./components/TaskFilter";
import { TaskList } from "./components/TaskList";
import { TaskCounter } from "./components/TaskCounter";
import { ClearCompleted } from "./components/ClearCompleted";
import "./styles/main.scss";
import { FilterType } from "./types/types";

function App() {
  const [filter, setFilter] = useState<FilterType>("all");
  return (
    <div>
      <div className="title">todos</div>
      <div className="todos">
        <AddTaskForm />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <div className="todos-main">
          <TaskList filter={filter} />
          <div className="todos-task">
            <TaskCounter />
            <ClearCompleted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

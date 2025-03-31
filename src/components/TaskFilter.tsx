import { useTaskStore } from "../store/tashStore";
import { FilterType } from "../types/types";

interface TaskFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export const TaskFilter = ({ filter, setFilter }: TaskFilterProps) => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="taskFilter">
      <button 
        className={`all-btn ${filter === 'all' ? 'active' : ''}`} 
        onClick={() => setFilter("all")}
      >
        All <span>{tasks.length}</span>
      </button>
      <button 
        className={`active-btn ${filter === 'active' ? 'active' : ''}`}
        onClick={() => setFilter("active")}
      >
        Active <span>{tasks.filter((t) => !t.completed).length}</span>
      </button>
      <button 
        className={`end-btn ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter("completed")}
      >
        Completed <span>{tasks.filter((t) => t.completed).length}</span>
      </button>
    </div>
  );
};
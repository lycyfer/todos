import { useTaskStore } from "../store/tashStore";


export const ClearCompleted = () => {
  const clearCompleted = useTaskStore((state) => state.clearCompleted);

  return (
    <button className="clear-btn" onClick={clearCompleted} disabled={!useTaskStore.getState().tasks.some(t => t.completed)}>
      Clear List
    </button>
  );
};
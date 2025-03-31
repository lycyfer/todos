import { useTaskStore } from "../store/tashStore";


export const TaskCounter = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const remaining = tasks.filter((t) => !t.completed).length;

  return <div>To-DO {remaining}</div>;
};
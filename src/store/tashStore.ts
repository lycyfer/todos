import { create } from 'zustand';

type Task = {
    id: string;
    text: string;
    completed: boolean;
};

type TaskStore = {
    tasks: Task[];
    addTask: (text: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    clearCompleted: () => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (text) =>
        set((state) => ({
            tasks: [...state.tasks, { id: Date.now().toString(), text, completed: false }],
        })),
    toggleTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),
    deleteTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
    clearCompleted: () =>
        set((state) => ({
            tasks: state.tasks.filter((task) => !task.completed),
        })),
}));
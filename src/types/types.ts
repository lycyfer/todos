export type Task = {
    id: string;
    text: string;
    completed: boolean;
};

export type FilterType = 'all' | 'active' | 'completed';
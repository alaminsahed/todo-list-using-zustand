import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'


const useStore = create(
    devtools(persist((set => ({
        tasks: [],
        addTask: (task) => set(state => ({ tasks: [...state.tasks, task] })),
        removeTask: (id) => set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),

    })), {
        name: 'tasks',
    }))
)

export default useStore;
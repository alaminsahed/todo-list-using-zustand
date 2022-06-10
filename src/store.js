import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useStore = create(devtools(set => ({
    tasks: [],
    addTask: (task) => set(state => ({ tasks: [...state.tasks, task] })),
    removeTask: (id) => set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),

})))

export default useStore;
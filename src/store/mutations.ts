import { State } from '@/store/index';
import { Task } from '@/models/task.model';
import { v4 as uuidv4 } from 'uuid';

export const addTask = (state: State, taskTitle: string): void => {
    const task = {
        id: uuidv4(),
        title: taskTitle,
        completed: false
    }
    state.tasks.push(task);
}

export const editTask = (state: State, task: Task): void => {
    const taskIndex: number = state.tasks.findIndex(t => t.id == task.id);
    state.tasks[taskIndex] = task;
};

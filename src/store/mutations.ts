import { State } from '@/store/index';
import { Task } from '@/models/task.model';
import { v4 as uuidv4 } from 'uuid';

export const addTask = (state: State, taskTitle: string): void => {
    const task = {
        id: uuidv4(),
        title: taskTitle,
        completed: false
    };
    state.tasks.push(task);
};

export const editTask = (state: State, task: Task): void => {
    const taskIndex: number = state.tasks.findIndex(t => t.id == task.id);
    state.tasks[taskIndex] = task;
};

export const deleteTask = (state: State, id: string): void => {
    const taskIndex: number = state.tasks.findIndex(t => t.id == id);
    taskIndex > -1 ? state.tasks.splice(taskIndex, 1) : new Error('Invalid index');
};

export const clearAllTasks = (state: State): void => {
    state.tasks.length = 0;
};

export const clearCompletedTasks = (state: State): void => {
    state.tasks = state.tasks.filter(task => !task.completed);
};

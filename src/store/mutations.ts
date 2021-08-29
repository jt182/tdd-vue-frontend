import { State } from '@/store/index';
import { Task } from '@/models/task.model';

export const editTask = (state: State, task: Task): void => {
    const taskIndex: number = state.tasks.findIndex(t => t.id == task.id);
    state.tasks[taskIndex] = task;
};

import { Task } from '@/models/task.model';
import { State } from '@/store/index';

export const tasks = (state: State): Task[] => state.tasks;

export const completedTasks = (state: State): Task[] => state.tasks.filter(task => task.completed);

export const activeTasks = (state: State): Task[] => state.tasks.filter(task => !task.completed);

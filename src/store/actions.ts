import { Task } from '@/models/task.model';
import { Commit } from 'vuex';

export const addTask = ({commit}: { commit: Commit }, taskTitle: string): void => {
    commit('addTask', taskTitle);
};

export const editTask = ({commit}: { commit: Commit }, task: Task): void => {
    commit('editTask', task);
};

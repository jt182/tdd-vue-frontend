import { Task } from '@/models/task.model';
import { Commit } from 'vuex';

export const addTask = ({commit}: { commit: Commit }, taskTitle: string): void => {
    commit('addTask', taskTitle);
};

export const editTask = ({commit}: { commit: Commit }, task: Task): void => {
    commit('editTask', task);
};

export const deleteTask = ({commit}: { commit: Commit }, id: string): void => {
    commit('deleteTask', id);
};

export const clearAllTasks = ({commit}: { commit: Commit }): void => {
    commit('clearAllTasks');
};

export const clearCompletedTasks = ({commit}: { commit: Commit }): void => {
    commit('clearCompletedTasks');
};

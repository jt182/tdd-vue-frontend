import { Task } from '@/models/task.model';
import { Commit } from 'vuex';

export const editTask = ({commit}: { commit: Commit }, task: Task): void => {
    commit('editTask', task);
};

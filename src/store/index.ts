import { createStore } from 'vuex';
import { Task } from '@/models/task.model';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

export interface State {
    tasks: Task[]
}

const state: State = {
    tasks: [
        {id: '1', title: 'Test Task 1', completed: false},
        {id: '2', title: 'Test Task 2', completed: true}
    ]
};

export default createStore({
    state,
    getters,
    actions,
    mutations
});

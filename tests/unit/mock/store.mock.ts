import { createStore } from 'vuex';
import * as getters from '@/store/getters'

export const store = createStore({
    state() {
        return {
            tasks: [
                { id: '1', title: 'Test Task 1', completed: false },
                { id: '2', title: 'Test Task 2', completed: true },
                { id: '3', title: 'Test Task 3', completed: false }
            ]
        }
    },
    getters
})

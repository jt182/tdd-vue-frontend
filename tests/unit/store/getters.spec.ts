import * as getters from '@/store/getters';

describe('getters', () => {
    const state = {
        tasks: [
            {id: '1', title: 'Test Task 1', completed: false},
            {id: '2', title: 'Test Task 2', completed: true},
            {id: '3', title: 'Test Task 3', completed: false}
        ]
    };

    it('get all tasks', () => {
        const result = getters.tasks(state);

        expect(result).toBe(state.tasks);
    });

    it('get completed tasks', () => {
        const result = getters.completedTasks(state);

        result.forEach(task => {
            expect(task.completed).toBeTruthy();
        });
    });

    it('get active tasks', () => {
        const result = getters.activeTasks(state);

        result.forEach(task => {
            expect(task.completed).toBeFalsy();
        });

    });
});

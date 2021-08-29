import * as mutations from '@/store/mutations';

describe('mutations', () => {

    it('Edit task', () => {
        const task = {id: '1', title: 'Test Task 1', completed: false};
        const state = {
            tasks: [task]
        };

        task.title = 'Edited Test Task 1';
        task.completed = true;

        mutations.editTask(state, task);

        expect(state.tasks[0]).toBe(task);
    });
});

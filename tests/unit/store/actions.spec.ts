import * as actions from '@/store/actions';
import { flushPromises } from '@vue/test-utils';

describe('actions', () => {
    it('add tasks', async () => {
        const commit = jest.fn();
        const taskTitle = 'New Test Task';

        actions.addTask({commit}, taskTitle);
        await flushPromises();
        expect(commit).toHaveBeenCalledWith('addTask', taskTitle);
    });

    it('edit tasks', async () => {
        const commit = jest.fn();
        const task = {id: '1', title: 'Test Task 1', completed: false};

        actions.editTask({commit}, task);
        await flushPromises();
        expect(commit).toHaveBeenCalledWith('editTask', task);
    });
});

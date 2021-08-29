import * as actions from '@/store/actions';
import { flushPromises } from '@vue/test-utils';

describe('actions', () => {
    it('edit tasks', async () => {
        const commit = jest.fn();
        const task = {id: '1', title: 'Test Task 1', completed: false};

        actions.editTask({commit}, task);
        await flushPromises();
        expect(commit).toHaveBeenCalledWith('editTask', task);
    });
});

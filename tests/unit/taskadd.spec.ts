import { shallowMount } from '@vue/test-utils';
import TaskAdd from '@/components/TaskAdd.vue';

describe('Tests for task add Component', () => {
    it('Create new task', async () => {
        const $store = {
            state: {
                tasks: []
            },
            dispatch: jest.fn()
        };

        const wrapper = shallowMount(TaskAdd, {
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const title = 'Create Task';

        const inputField = wrapper.find('[data-testid="inputFieldTitle"]');
        inputField.setValue(title);

        const createButton = wrapper.find('[data-testid="createButton"]');
        await createButton.trigger('click');

        expect($store.dispatch).toHaveBeenCalled();
        expect($store.dispatch).toHaveBeenCalledWith('addTask', title);
    });
});

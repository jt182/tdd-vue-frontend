import { shallowMount } from '@vue/test-utils';
import TaskListButtonBar from '@/components/TaskListButtonBar.vue';

describe('Tests for task list button bar Component', () => {
    const $store = {
        state: {
            tasks: []
        },
        dispatch: jest.fn()
    };

    it('Emit event: filter all tasks', async () => {
        const wrapper = shallowMount(TaskListButtonBar);

        const filterButton = wrapper.find('[data-testid="filterAllButton"]');
        await filterButton.trigger('click');

        expect(wrapper.emitted()).toHaveProperty('filter');
        const filterEvent = wrapper.emitted().filter;
        expect(filterEvent[0]).toContainEqual('allTasks');
    });

    it('Emit event: filter completed tasks', async () => {
        const wrapper = shallowMount(TaskListButtonBar);

        const filterButton = wrapper.find('[data-testid="filterCompletedButton"]');
        await filterButton.trigger('click');

        expect(wrapper.emitted()).toHaveProperty('filter');
        const filterEvent = wrapper.emitted().filter;
        expect(filterEvent[0]).toContainEqual('completedTasks');
    });

    it('Emit event: filter active tasks', async () => {
        const wrapper = shallowMount(TaskListButtonBar);

        const filterButton = wrapper.find('[data-testid="filterActiveButton"]');
        await filterButton.trigger('click');

        expect(wrapper.emitted()).toHaveProperty('filter');
        const filterEvent = wrapper.emitted().filter;
        expect(filterEvent[0]).toContainEqual('activeTasks');
    });

    it('Clear all tasks', async () => {
        const wrapper = shallowMount(TaskListButtonBar, {
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const clearAllButton = wrapper.find('[data-testid="clearAllButton"]');
        await clearAllButton.trigger('click');

        expect($store.dispatch).toHaveBeenCalled();
        expect($store.dispatch).toHaveBeenCalledWith('clearAllTasks');
    });

    it('Clear completed tasks', async () => {
        const wrapper = shallowMount(TaskListButtonBar, {
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const clearCompletedButton = wrapper.find('[data-testid="clearCompletedButton"]');
        await clearCompletedButton.trigger('click');

        expect($store.dispatch).toHaveBeenCalled();
        expect($store.dispatch).toHaveBeenCalledWith('clearCompletedTasks');
    });
});

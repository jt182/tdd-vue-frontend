import { shallowMount } from '@vue/test-utils';
import TaskListButtonBar from '@/components/TaskListButtonBar.vue';

describe('Tests for task list button bar Component', () => {

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
});

import { shallowMount } from '@vue/test-utils';
import TaskList from '@/components/TaskList.vue';
import { store } from './mock/store.mock';

describe('Tests for task list Component', () => {

    it('Renders all tasks', () => {
        const wrapper = shallowMount(TaskList, {
            global: {
                provide: {
                    store: store
                },
            }
        });

        const taskList = wrapper.find('[data-testid="tasks"]');
        expect(taskList.element.children.length).toBe(3);
    })
})

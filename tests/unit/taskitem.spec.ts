import { shallowMount } from '@vue/test-utils';
import TaskItem from '@/components/TaskItem.vue';

describe('Tests for task item Component', () => {

    it('Renders active task item', () => {
        const wrapper = shallowMount(TaskItem, {
            props: {
                task: {id: '1', title: 'Test Task 1', completed: false}
            }
        });

        const taskItem = wrapper.find('[data-testid="task"]');
        expect(taskItem.text()).toContain('Test Task 1');
        expect(taskItem.classes()).not.toContain('taskItemCompleted');
    });

    it('Renders completed task item', () => {
        const wrapper = shallowMount(TaskItem, {
            props: {
                task: {id: '1', title: 'Test Task 1', completed: true}
            }
        });

        const taskItem = wrapper.find('[data-testid="task"]');
        expect(taskItem.text()).toContain('Test Task 1');
        expect(taskItem.classes()).toContain('taskItemCompleted');
    });

    it('Update store with completed state of task item updated after clicking it', async () => {
        const $store = {
            state: {
                tasks: []
            },
            commit: jest.fn()
        };

        const wrapper = shallowMount(TaskItem, {
            props: {
                task: {id: '1', title: 'Test Task 1', completed: false}
            },
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const taskItem = wrapper.find('[data-testid="task"]');
        await taskItem.trigger('click');

        expect($store.commit).toHaveBeenCalled();
        expect($store.commit).toHaveBeenCalledWith('editTask', {'id': '1', 'title': 'Test Task 1', 'completed': true});
    });

    it('Update store with task item id to delete', async () => {
        const $store = {
            state: {
                tasks: []
            },
            commit: jest.fn()
        };

        const wrapper = shallowMount(TaskItem, {
            props: {
                task: {id: '1', title: 'Test Task 1', completed: false}
            },
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const deleteButton = wrapper.find('[data-testid="deleteButton"]');
        await deleteButton.trigger('click');

        expect($store.commit).toHaveBeenCalled();
        expect($store.commit).toHaveBeenCalledWith('deleteTask', '1');
    });
});

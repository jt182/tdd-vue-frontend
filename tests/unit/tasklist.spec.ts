import { mount, shallowMount } from '@vue/test-utils';
import TaskList from '@/components/TaskList.vue';
import TaskListButtonBar from '@/components/TaskListButtonBar.vue';
import { createStore } from 'vuex';
import * as getters from '@/store/getters';

describe('Tests for task list Component', () => {
    const $store = createStore({
        state() {
            return {
                tasks: [
                    {id: '1', title: 'Test Task 1', completed: false},
                    {id: '2', title: 'Test Task 2', completed: true},
                    {id: '3', title: 'Test Task 3', completed: false}
                ]
            };
        },
        getters
    });

    it('Renders all tasks', () => {
        const wrapper = mount(TaskList, {
            global: {
                provide: {
                    store: $store
                },
                stubs: {
                    TaskItem: {
                        template: '<span />'
                    },
                    TaskListButtonBar: {
                        template: '<span/>'
                    }
                }
            }
        });

        const taskList = wrapper.find('[data-testid="tasks"]');
        expect(taskList.element.children.length).toBe(3);
    });

    it('Renders completed tasks', async () => {
        const wrapper = shallowMount(TaskList, {
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const taskList = wrapper.find('[data-testid="tasks"]');
        expect(taskList.element.children.length).toBe(3);

        await wrapper.getComponent(TaskListButtonBar).vm.$emit('filter', 'completedTasks');

        expect(taskList.element.children.length).toBe(1);
    });

    it('Renders active tasks', async () => {
        const wrapper = shallowMount(TaskList, {
            global: {
                provide: {
                    store: $store
                }
            }
        });

        const taskList = wrapper.find('[data-testid="tasks"]');
        expect(taskList.element.children.length).toBe(3);

        await wrapper.getComponent(TaskListButtonBar).vm.$emit('filter', 'activeTasks');

        expect(taskList.element.children.length).toBe(2);
    });
});

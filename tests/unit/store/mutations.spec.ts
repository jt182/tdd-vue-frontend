import * as mutations from '@/store/mutations';
import { Task } from '@/models/task.model';

describe('mutations', () => {

    it('Add task', () => {
        const taskTitle = 'New Task';
        const state = {
            tasks: []
        };

        mutations.addTask(state, taskTitle);

        const task = state.tasks[0] as Task;
        expect(task.title).toBe(taskTitle);
        expect(task.completed).toBeFalsy();
    })

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

    it('Delete task', () => {
        const task = {id: '1', title: 'Test Task 1', completed: false};
        const state = {
            tasks: [task]
        };

        mutations.deleteTask(state, '1');

        const taskIndex = state.tasks.findIndex(t => t.id == '1');
        expect(taskIndex).toBe(-1);
    });
});

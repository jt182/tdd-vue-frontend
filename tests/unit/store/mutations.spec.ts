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
    });

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

    it('Clear all task', () => {
        const state = {
            tasks: [
                {id: '1', title: 'Test Task 1', completed: false},
                {id: '2', title: 'Test Task 2', completed: true},
                {id: '3', title: 'Test Task 3', completed: false}
            ]
        };

        mutations.clearAllTasks(state);

        expect(state.tasks.length).toBe(0);
    });


    it('Clear completed task', () => {
        const state = {
            tasks: [
                {id: '1', title: 'Test Task 1', completed: false},
                {id: '2', title: 'Test Task 2', completed: true},
                {id: '3', title: 'Test Task 3', completed: false}
            ]
        };

        mutations.clearCompletedTasks(state);

        expect(state.tasks.length).toBe(2);
    });
});

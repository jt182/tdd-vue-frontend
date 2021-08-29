<template>
    <div class="taskItemGroup">
        <div data-testid="task" :class="taskItemClass" @click="toggleCompletedState">
            {{ task.title }}
        </div>
        <button data-testid="deleteButton"
                @click="deleteTask"
                class="redButton"
        >Delete
        </button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Task } from '@/models/task.model';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'TaskItem',
    props: {
        task: {
            type: Object as () => Task,
            required: true
        }
    },
    setup(props) {
        const store = useStore();

        const taskItemClass = computed(() => props.task.completed ? 'taskItem taskItemCompleted' : 'taskItem');

        function toggleCompletedState(): void {
            store.dispatch('editTask', {...props.task, completed: !props.task.completed});
        }

        function deleteTask(): void {
            store.dispatch('deleteTask', props.task.id);
        }

        return {
            taskItemClass,
            deleteTask,
            toggleCompletedState
        };
    }
});

</script>

<style scoped lang="scss">

.taskItemGroup {
    display: flex;
    margin-bottom: 5pt;
}

.taskItem {
    font-weight: bold;
    border: 1pt solid black;
    border-radius: 5pt;
    padding: 5pt;
    background-color: rgba(grey, .15);
    width: 100%;
}

.taskItem:hover {
    background-color: rgba(grey, .4);
    cursor: pointer;
}

.taskItemCompleted {
    text-decoration: line-through;
    background-color: rgba(green, .15);
}

.taskItemCompleted:hover {
    background-color: rgba(green, .4);
}

</style>

<template>
    <h2>Task List ({{ filteredTasks.length }})</h2>
    <div data-testid="tasks">
        <div v-for="task in filteredTasks" :key="task.id">
            <TaskItem :task="task"/>
        </div>
    </div>
    <TaskListButtonBar data-testid="taskListButtonBar" @filter="filter" v-if="allTasks.length > 0"/>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';
import TaskListButtonBar from '@/components/TaskListButtonBar.vue';
import { Task } from '@/models/task.model';

export default defineComponent({
    name: 'TaskList',
    components: {TaskListButtonBar, TaskItem},
    setup() {
        const store = useStore();

        const filterType = ref('all');

        const allTasks = ref(store.getters.tasks);

        const filteredTasks = computed(() => {
            const tasks = store.getters.tasks as Task[];
            switch (filterType.value) {
                case 'completedTasks':
                    return tasks.filter(task => task.completed);
                case 'activeTasks':
                    return tasks.filter(task => !task.completed);
                default:
                    return tasks;
            }
        });

        function filter(type: string): void {
            filterType.value = type;
        }

        return {
            allTasks,
            filteredTasks,
            filter
        };
    }
});

</script>

<style scoped>

</style>

<template>
    <h2>Task List ({{ tasks.length }})</h2>
    <div data-testid="tasks">
        <div v-for="task in tasks" :key="task.id">
            <TaskItem :task="task"/>
        </div>
    </div>
    <TaskListButtonBar @filter="filter"/>
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
        const tasks = computed(() => {
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

        function filter(type: string):void {
            filterType.value = type;
        }

        return {
            tasks,
            filter
        };
    }
});

</script>

<style scoped>

</style>

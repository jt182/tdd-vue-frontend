<template>
    <h2>Task List ({{ tasks.length }})</h2>
    <div data-testid="tasks">
        <div v-for="task in tasks" :key="task.id">
            <TaskItem :task="task"/>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';

export default defineComponent({
    name: 'TaskList',
    components: {TaskItem},
    setup() {
        const store = useStore();

        const tasks = computed(() => store.getters.tasks);

        return {
            tasks
        };
    }
});

</script>

<style scoped>

</style>

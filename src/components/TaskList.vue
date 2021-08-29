<template>
    <h2>Task List ({{ tasks.length }})</h2>
    <div data-testid="tasks">
        <div v-for="task in tasks" :key="task.id">
            {{ task.title }}
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'TaskList',
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

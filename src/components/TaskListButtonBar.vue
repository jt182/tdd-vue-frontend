<template>
    <div class="buttonBar">
        <button data-testid="filterAllButton" style="margin-left: 0;"
                @click="filter('allTasks')"
                class="orangeButton"
        >all
        </button>
        <button data-testid="filterCompletedButton"
                @click="filter('completedTasks')"
                class="orangeButton"
        >completed
        </button>
        <button data-testid="filterActiveButton"
                @click="filter('activeTasks')"
                class="orangeButton"
        >active
        </button>

        <button data-testid="clearCompletedButton" style="margin-left: auto;"
                @click="clearCompletedTasks"
                class="redButton"
        >Clear completed
        </button>
        <button data-testid="clearAllButton"
                @click="clearAllTasks"
                class="redButton"
        >Clear all
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'TaskListButtonBar',
    emits: ['filter'],
    setup(props, {emit}) {
        const store = useStore();

        function filter(filterType: string): void {
            emit('filter', filterType);
        }

        function clearAllTasks(): void {
            store.dispatch('clearAllTasks');
        }

        function clearCompletedTasks(): void {
            store.dispatch('clearCompletedTasks');
        }

        return {
            clearAllTasks,
            clearCompletedTasks,
            filter
        };
    }
});

</script>

<style scoped>

.buttonBar {
    display: flex;
}

</style>

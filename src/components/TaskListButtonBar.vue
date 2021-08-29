<template>
    <div class="buttonBar">
        <button data-testid="filterAllButton"
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TaskListButtonBar',
    emits: ['filter'],
    setup(props, {emit}) {

        function filter(filterType: string) {
            emit('filter', filterType);
        }

        return {
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

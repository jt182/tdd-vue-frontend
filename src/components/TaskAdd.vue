<template>
    <h2>Create Task</h2>
    <div class="addTask">
        <input data-testid="inputFieldTitle"
               type="text"
               class="titleInputField"
               v-model="taskTitle"
               @keyup.enter="addTask"
               placeholder="Task title"
        />
        <button data-testid="createButton"
                @click="addTask"
                class="blueButton"
        >Add
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'TaskAdd',
    setup() {
        const store = useStore();

        const taskTitle = ref('');

        function addTask(): void {
            store.commit('addTask', taskTitle.value);
            taskTitle.value = '';
        }

        return {
            taskTitle,
            addTask
        };
    }
});

</script>

<style scoped lang="scss">

.addTask {
    display: flex;
}

.titleInputField {
    border: 1pt solid black;
    border-radius: 5pt;
    padding: 5pt;
    width: 100%;
}

</style>

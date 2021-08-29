<template>
    <Header title="{ Tasks App }"/>
    <TaskList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import TaskList from '@/components/TaskList.vue';

export default defineComponent({
    name: 'App',
    components: {TaskList, Header}
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: auto;
    width: 600pt;
}
</style>

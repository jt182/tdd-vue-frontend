<template>
    <Header title="{ Tasks App }"/>
    <TaskAdd/>
    <TaskList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import TaskList from '@/components/TaskList.vue';
import TaskAdd from '@/components/TaskAdd.vue';

export default defineComponent({
    name: 'App',
    components: {TaskAdd, TaskList, Header}
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

<style lang="scss">

.blueButton {
    font-weight: bold;
    border: 1pt solid rgba(green, .6);
    border-radius: 5pt;
    padding: 5pt 10pt;
    margin-left: 5pt;
    background-color: rgba(green, .15);
    color: rgba(green, .6);
}

.blueButton:hover {
    background-color: rgba(green, .4);
    color: white;
    cursor: pointer;
}

.redButton {
    font-weight: bold;
    border: 1pt solid rgba(red, .6);
    border-radius: 5pt;
    padding: 5pt 10pt;
    margin-left: 5pt;
    background-color: rgba(red, .15);
    color: rgba(red, .6);
}

.redButton:hover {
    background-color: rgba(red, .4);
    color: white;
    cursor: pointer;
}

</style>

<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <div class="logo">¯\_(ツ)_/¯</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped>
.header {
    display: flex;
    background-color: lightgray;
    padding: 0 10pt;
    align-items: center;
}

.logo {
    margin-left: auto;
}

</style>

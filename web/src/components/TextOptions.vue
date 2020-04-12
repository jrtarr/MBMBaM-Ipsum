<template>
    <form action="" id="template-form">
        <label for="">How many paragraphs?</label>
        <input type="number" name="count">
        <label for="">Dirty Zone?</label>
        <input type="checkbox" name="nsfw">
        <label for="">Generate</label>
        <input type="submit" value="Let's Go!">
    </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'TextOptions',
})
</script>

<style lang="scss">

</style>
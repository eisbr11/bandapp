<template>
    <BandEdit v-bind:id="id"/>
</template>

<script>
    import BandEdit from '@/components/BandEdit';

    export default {
        name: "BandEditView",
        props: [ 'id' ],
        components: {
            BandEdit
        }
    }
</script>

<style scoped>

</style>
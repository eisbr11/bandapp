<template>
    <div>
        <md-button class="md-primary" @click="goBack()">Back</md-button>
        EDIT MASK

    </div>
</template>

<script>
    export default {
        name: "BandEdit",
        data() {
            return {
                band: {},
                bandIndex: -1
            }
        },
        props: [ 'id' ],
        methods: {
            loadBand() {
                this.band = {}
            },
            goBack() {
                this.$router.push({ name: 'View Bands' })
            }
        },
        mounted() {
            if (this.id) {
                this.loadBand();
            }
        }
    }
</script>

<style scoped>

</style>
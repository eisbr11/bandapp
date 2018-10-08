<template>
    <div class="bandlist">
        <div v-if="bands.length > 0">
            <ul>
                <li v-for="band of bands" v-bind:key="band.id">{{ band.name }}</li>
            </ul>
            <md-button class="md-primary md-raised" @click="goToNew()">add new band</md-button>
        </div>
        <div v-else>
            <md-empty-state
                    md-icon="group_add"
                    md-label="Create your first band"
                    md-description="By creating your first band, you will be able to add members to that band and also share dates like rehearsals. Also you rock!">
                <md-button class="md-primary md-raised" @click="goToNew()">Create your first band</md-button>
            </md-empty-state>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BandList",
        data() {
            return {
                bands: []
            }
        },
        methods: {
            loadBands() {
                this.bands = [
                    {
                        id: 1,
                        name: "Led Zeppelin",
                        genre: "Cock Rock"
                    },
                    {
                        id: 2,
                        name: "Sex Pistols",
                        genre: "Punk Rock"
                    }
                ]
            },
            goToNew() {
                this.$router.push({ name: 'Create Band'})
            }
        },
        mounted() {
            this.loadBands();
        }
    }
</script>

<style scoped>

</style>
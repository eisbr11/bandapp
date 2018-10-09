<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6 mt-3>
            <v-card>
                <div v-if="bandsCount > 0">
                    <v-card-title>
                        Bands
                    </v-card-title>
                    <v-list>
                        <v-list-tile v-for="band of bands" v-bind:key="band.id">
                            <v-list-tile-content>
                                {{ band.name }}, {{ band.genre }}
                                <small>{{ parseTimestamp(band.timestamp) }}</small>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn icon ripple @click="goToEdit(band.id)">
                                    <v-icon color="primary">edit</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-action>
                                <v-btn icon ripple>
                                    <v-icon color="grey lighten-1">delete</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                    <v-card-text>
                        <v-btn absolute dark fab bottom right color="pink" @click="goToNew">
                            <v-icon>add</v-icon>
                        </v-btn>
                    </v-card-text>
                </div>
                <div v-else>
                    <!--TODO add content for empty state-->
                    <!--<md-empty-state
                            md-icon="group_add"
                            md-label="Create your first band"
                            md-description="By creating your first band, you will be able to add members to that band and also share dates like rehearsals. Also you rock!">
                        <md-button class="md-primary md-raised" @click="goToNew()">Create your first band</md-button>
                    </md-empty-state>-->
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    const moment = require('moment');

    export default {
        name: "BandList",
        data() {
            return {
                bands: []
            }
        },
        methods: {
            loadBands() {
                const bands = this.$localStorage.get('bands');
                this.bands = bands;
            },
            goToNew() {
                this.$router.push({ name: 'Create Band'})
            },
            goToEdit(id) {
                this.$router.push({
                    name: 'Edit Band',
                    params: {
                        id: id
                    }
                })
            },
            parseTimestamp(time) {
                return moment(time).fromNow();
            }
        },
        mounted() {
            this.loadBands();
        },
        computed: {
            bandsCount() {
                return this.bands.length;
            }
        }
    }
</script>

<style scoped>

</style>
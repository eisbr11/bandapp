<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6 mt-3>
            <v-card>
                <v-form @submit.prevent="saveBand()">
                    <v-card-text>
                        <v-text-field required label="Name of the band" :rules="nameRules" v-model="band.name"></v-text-field>
                        <v-autocomplete v-model="band.genre" :items="genres" label="Genre of the Band"></v-autocomplete>
                    </v-card-text>
                    <v-divider class="mt-3"></v-divider>
                    <v-card-actions>
                        <v-btn flat @click="goBack()">Cancel</v-btn>
                        <v-btn color="primary" type="submit">Submit</v-btn>
                        <v-btn v-if="this.id" color="alert" @click="deleteBand()">Delete this Band</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    const uuidV4 = require('uuid/v4');

    export default {
        name: "BandEdit",
        data: () => ({
            valid: false,
            band: {
                name: '',
                genre: ''
            },
            bandIndex: -1,
            genres: [
                'Blues',
                'Classical',
                'Jazz',
                'Reggae',
                'Country',
                'Electronic',
                'Folk',
                'Rock',
            ],
            nameRules: [
                v => v.length >= 3 || 'Name must be more than two characters'
            ]


        }),
        props: [ 'id' ],
        methods: {
            loadBand() {
                const bands = this.$localStorage.get('bands');
                this.bandIndex = bands.findIndex( band => band.id === this.id );
                if (this.bandIndex >= 0) {
                    this.band = bands[this.bandIndex]
                } else {
                    this.goBack();
                }
            },
            deleteBand() {
                if (confirm('Do you really want to delete the band?')) {
                    const bands = this.$localStorage.get('bands');
                    const bandIndex = bands.findIndex(band => band.id === this.id);
                    bands.splice(bandIndex, 1);
                    this.$localStorage.set('bands', bands);
                    this.goBack();
                    /*
                    const notes = this.$localStorage.get('notes');
                    const noteIndex = notes.findIndex(note => note.id === this.id);
                    notes.splice(noteIndex, 1);
                    this.$localStorage.set('notes', notes);
                    this.$router.push('/');
                    */
                }
            },
            saveBand() {
                let bands = this.$localStorage.get('bands');
                if (this.band.name !== '') {
                    const band = Object.assign({}, this.band, {
                        id: this.band.id || uuidV4(),
                        timestamp: Date.now()
                    });
                    if (this.bandIndex >= 0) {
                        bands[this.bandIndex] = band;
                    } else {
                        bands.push(band);
                    }
                } else if (this.bandIndex >= 0) {
                    bands.splice(this.bandIndex, 1)
                }
                this.$localStorage.set('bands', bands);
                this.goBack();
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
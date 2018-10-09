<template>
    <v-container grid-list-md text-xs-center fill-height>
        <v-layout align-center>
            <v-layout justify-space-around row wrap>
                <v-flex d-flex xs12 sm4>
                    <v-card dark color="green" to="/bands">
                        <span class="text-xs-center">
                            <v-icon class="very-large-icon">group</v-icon>
                        </span>
                        <v-card-text class="display-1 pt-0">With this App you can create new Bands</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm4>
                    <v-card dark color="blue">
                        <span class="text-xs-center">
                            <v-icon class="very-large-icon">person</v-icon>
                        </span>
                        <v-card-text class="display-1">Add new members to bands</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm4>
                    <v-card dark color="indigo">
                        <span class="text-xs-center">
                            <v-icon class="very-large-icon">date_range</v-icon>
                        </span>
                        <v-card-text class="display-1">Set up dates, like rehearsals and concerts for your band</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "HomeContent"
    }
</script>

<style scoped lang="scss">
    .very-large-icon {
        font-size: 126px;
    }
</style>
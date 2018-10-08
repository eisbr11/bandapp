<template>
    <div class="HomeContent">
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                <div class="md-layout">
                    <div class="md-layout-item md-size-100 text-align-center">
                        <md-icon class="md-size-5x">group</md-icon>
                    </div>
                    <div class="md-layout-item md-display-1 text-align-center">
                        With this App you can create new Bands
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                <div class="md-layout">
                    <div class="md-layout-item md-size-100 text-align-center">
                        <md-icon class="md-size-5x">person</md-icon>
                    </div>
                    <div class="md-layout-item md-display-1 text-align-center">
                        Add new members to bands
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                <div class="md-layout">
                    <div class="md-layout-item md-size-100 text-align-center">
                        <md-icon class="md-size-5x">date_range</md-icon>
                    </div>
                    <div class="md-layout-item md-display-1 text-align-center">
                        Set up dates, like rehearsals and concerts for your band
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-size-100 text-align-center">
                Created by Felix Schliemann, Github: <a href="https://github.com/eisbr11">https://github.com/eisbr11</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeContent"
    }
</script>

<style scoped lang="scss">
    .md-layout {
        .md-layout-item {
            margin: 0.5em 0;
        }
    }
    .text-align-center {
        text-align: center;
    }
</style>
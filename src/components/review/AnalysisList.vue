<template>
    <v-container class="list-container">
        <v-row class="list-box">
            <analysis-item />
        </v-row>
    </v-container>
</template>

<script>

import AnalysisItem from './AnalysisItem.vue'
export default {
    components:{
        AnalysisItem
    }
}
</script>

<style lang="scss" scoped>
.list-container{

    .list-box{
        background: lightgray;
        margin: 0px 10px 0 10px;
        height: 100px;
    }
}
</style>
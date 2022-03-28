<template>
    <v-container class="list-box">
        <analysis-item v-for="item in analysisList" :key="item.reviewAnalsId" :item="item" />
    </v-container>
</template>

<script>
import AnalysisItem from './AnalysisItem.vue'
export default {
  components: { AnalysisItem },
  computed:{
    analysisList(){
        return this.$store.state.review.analysisList
    }
  }
}
</script>

<style lang="scss" scoped>
.list-box{
    background: lightgray;
    // margin: 10px;
    // height: 300px;
}
</style>
<template>
    <v-container>
        <title-box title="리뷰 분석" />
        <analysis-search />
        <analysis-list />
    </v-container>   
</template>

<script>

import AnalysisSearch from '@/components/review/AnalysisSearch.vue'
import AnalysisList from '@/components/review/AnalysisList.vue'
import TitleBox from '@/components/TitleBox.vue'

export default {
    components:{
        AnalysisSearch,
        AnalysisList,
        TitleBox,
    },
    methods:{
        searchAnalysis(){
            this.$store.dispatch('review/searchAnalysisList',{
                pageNum: 1,
                startDate: "2022-03-10",
                endDate: "2022-03-19",
                searchText: ""
            })
        }
    },
    created(){
        this.searchAnalysis()
    }
}

</script>

<style lang="scss" scoped>

</style>
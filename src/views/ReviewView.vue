<template>
    <div>
        <title-box title="리뷰 분석" />
        <analysis-search />
        <analysis-list />
    </div>   
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
    }
}

</script>

<style lang="scss" scoped>
.analysis-container{
    
    .analysis-box{

        .title{
            color: lightgrey;
            font-size:100px;
            font-weight: bold;
        }

        .search{

            
        }
    }
}
</style>
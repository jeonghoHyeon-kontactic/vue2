<template>
    <v-container>
        <v-row class="search-box">
            <v-col class="date-box" cols="5">
                
            </v-col>
            <v-col class="input-box" cols="5">
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="Search"
                    @keydown.enter="searchAnalysis"
                ></v-text-field>
            </v-col>
            <v-col class="btn-box" cols="2">
                <v-btn
                elevation="2"
                
                >분석 요청</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
  components: { },
  methods:{
    searchAnalysis(){
        this.$store.dispatch('review/searchAnalysisList',{
            pageNum: 1,
            startDate: "2022-03-10",
            endDate: "2022-03-19",
            searchText: ""
        })
    }
  }
}
</script>

<style lang="scss" scoped>
    
.search-box{
    background: lightgray;
    // margin: 0 10px 0 10px;

    .date-box{
        
    }

    .input-box{
        
    }

    .btn-box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>
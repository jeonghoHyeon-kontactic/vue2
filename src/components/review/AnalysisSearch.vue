<template>
    <v-container class="search-container">
        <v-row class="search-box">
            <v-col class="date-box">
                
            </v-col>
            <v-col class="input-box">
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="Search"
                ></v-text-field>
            </v-col>
            <v-col class="btn-box">
                <v-btn
                elevation="2"
                
                >분석 요청</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.search-container{
    
    .search-box{
        background: lightgray;
        margin: 0 10px 0 10px;

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


}
</style>
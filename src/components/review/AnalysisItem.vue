<template>
    <v-row class="item-box">
        <v-col class="date" cols="4">
            {{ item.regDtm }}    
        </v-col>
        <v-col class="asin" cols="4">
            {{ item.reviewAsins }}
        </v-col>
        <v-col class="member" cols="1">
            {{ item.regId }}
        </v-col>
        <v-col class="status" cols="1">
            <div v-if="item.analsStatus == 1">
                대기
            </div>
            <div v-if="item.analsStatus == 2">
                진행
            </div>
            <div v-if="item.analsStatus == 3">
                완료
            </div>
            <div v-if="item.analsStatus == 4">
                실패
            </div>
        </v-col>
        <v-col class="detail" cols="1">
            <v-btn
                elevation="2"
                @click="analysisDetail"
            >상세 보기</v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            default: () => ({})
        }
    },
    methods:{
        analysisDetail(){
            this.$router.push(`/review/${this.item.reviewAnalsId}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.item-box{
    margin-bottom: 1px;
    overflow: hidden;
    height: 60px;
}
</style>
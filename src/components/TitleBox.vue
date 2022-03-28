<template>
    <v-row class="title-box">
        <v-col>
            {{ title }}
        </v-col>
    </v-row>
</template>

<script>
export default {
    props:[
        "title",
    ]
}
</script>

<style lang="scss" scoped>
.title-box{
    text-align: center;
    font-size: 80px;
    font-weight: bold;
}
</style>
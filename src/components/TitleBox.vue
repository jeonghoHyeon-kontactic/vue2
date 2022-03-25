<template>
    <div class="title-container">
        <div class="title-box">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "title",
    ]
}
</script>

<style lang="scss" scoped>
.title-container{
    .title-box{
        display: flex;
        justify-content: center;
        margin: 0px 10px 0px 10px;
        font-size: 70px;

    }
}
</style>
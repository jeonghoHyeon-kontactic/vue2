<template>
    <div>
        
        <div class="nav-item-box" v-for="i in nav" :key="i.name">
            <router-link class="nav-item-link" :to="i.href">
                <div class="nav-item">
                    {{ i.name }}
                </div>
            </router-link> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nav: [
                {
                    name: "Review",
                    href: "/review"
                },
                {
                    name: "Mypage",
                    href: "/mypage"
                },
                {
                    name: "Detail",
                    href: "/detail"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-item-box{
    text-align: center;
    border-bottom: 2px solid lightgray;
    padding: 10px 0 10px 0;
    .nav-item-link{
        text-decoration: none;
        color: black;
        font-size:24px;
        font-weight: bold;
        .nav-item{
            width: 100%;
            height: 100%;
        }
    }
}

.nav-item-box:hover{
    background: lightgray;
}
</style>
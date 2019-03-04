<template>
    <div id="homenav">
        <ul>
            <li v-for="(item,index) in lists" :key="index">
                <img :src="item.img" alt="">
                <span v-html="item.span"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lists:[
                {
                    img:"https://img.alicdn.com/imgextra/i3/2053469401/TB22BQvoYZnBKNjSZFrXXaRLFXa-2053469401.png",
                    span:"9.9包邮"
                },
                {
                    img:"https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png",
                    span:"疯抢排行"
                }
                ,{
                    img:"https://img.alicdn.com/imgextra/i2/2053469401/TB2Z1Qso7UmBKNjSZFOXXab2XXa-2053469401.png",
                    span:"咚咚抢"
                },
                {
                    img:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJhsPlAS4fsv7s-2053469401.png",
                    span:"聚拼团"
                }
            ]
        }
    }
}
</script>
<style scoped>
    #homenav{
        width: 100%;
        padding: 0.28rem 0;
        border-bottom: 10px solid rgb(245, 245, 245);
    }
    #homenav ul{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    #homenav ul li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
</style>

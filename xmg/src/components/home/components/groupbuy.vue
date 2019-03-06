<template>
    <div id="groupbuy">
        <a href="##">
            <div class="group">
                <h3></h3>
                <div>查看更多拼团&nbsp;<i class="iconfont">&#xe603;</i></div>
            </div>
            <ul>
                <li v-for="(item,index) in imgs" :key="index">
                    <img :src="item.src" alt="">
                    <div>
                        <span class="gg">拼团价</span>
                        <span class="moneys">￥<i v-html="item.money">99</i></span>
                    </div>
                </li>
            </ul>
        </a>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:[
                {
                    src:"http://gju3.alicdn.com/tps/i2/O1CN01BYnciR1jsDZCjUSIf_!!0-juitemmedia.jpg_480x480.jpg",
                    money:"99"
                },
                {
                    src:"http://gju3.alicdn.com/tps/i2/O1CN01BYnciR1jsDZCjUSIf_!!0-juitemmedia.jpg_480x480.jpg",
                    money:"88"
                },
                {
                    src:"http://gju3.alicdn.com/tps/i2/O1CN01BYnciR1jsDZCjUSIf_!!0-juitemmedia.jpg_480x480.jpg",
                    money:"77"
                },
                {
                    src:"http://gju3.alicdn.com/tps/i2/O1CN01BYnciR1jsDZCjUSIf_!!0-juitemmedia.jpg_480x480.jpg",
                    money:"66"
                }
            ]
        }
    }
}
</script>
<style scoped>
#groupbuy{
    border-bottom: 20px solid rgb(245, 245, 245);
    padding-bottom: 20px;
}
#groupbuy .group{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
#groupbuy .group h3{
    font-size: 0;
    height: 90px;
    overflow: hidden;
    background: url(https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJhsIdrfdTFXkr-2053469401.png) center left no-repeat;
    background-size: auto 36px;
    width: 25%;

}
#groupbuy ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
#groupbuy ul div{
    background: #FFE7C9;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
#groupbuy li{
    width: 25%;
    height: 100%;
    padding:0 8px;
}
#groupbuy img{
    width: 100%;
    position: relative;
}
#groupbuy .gg{
    background: #FC4D52;
    margin: 2px 2px;
    color: #fff;
    line-height: 0.44rem;
    height: 0.44rem;
    display: block;
    width: 50%;
}
#groupbuy .moneys{
    color: #FC4D52;
}
#groupbuy .moneys i{
    font-style: normal;
}
</style>

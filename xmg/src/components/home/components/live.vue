<template>
    <div id="live">
        <div class="title">
            <div class="text"><i></i><span>领券直播</span></div>
            <div class="nums">今日已为用户省钱<span>103,428,050</span>元</div>
        </div>
        <ul class="lists">
            <li>
                <a href="##">
                    <img src="https://img.alicdn.com/imgextra/i4/1994102692/TB2szXYX1KAUKJjSZFzXXXdQFXa_!!1994102692.jpg_310x310.jpg" alt="">
                    <div class="liright">
                        <h3>【新券~拍3件】精油蒸汽眼罩30片</h3>
                        <div class="numb"><span> 天猫价 ¥149.7</span><span class="ri">已售29.1万件</span></div>
                        <div class="moneys"><span>券后价 ¥<i>39.7</i></span><span class="ri">110元券</span></div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#live{
    padding: 0.2rem 0.28rem 0 0.28rem;
}
#live .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#live .title .text{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title .text span{
    padding-left: 0.28rem;
    font-size: 0.3rem;
    line-height: 0.45rem;
    font-weight: bold;
}
#live .title i{
    width: 6px;
    height: 0.23rem;
    background: #ff5d06;
    display: block;
}
.title .nums span{
    color: #FC4D52;
    font-size: 0.3rem;
}

#live .lists{
    padding-top: 0.2rem;
}
#live .lists a{
    display: flex;
    align-items: center;

}
.lists img{
    width: 2.52rem;
    height: 2.52rem;

}
.lists .liright{
    height: 2.52rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left:0.3rem; 
}
.lists .liright h3{
    line-height: 0.45rem;
    height: 1rem;
}
.lists .liright .numb{
    padding-top: 0.28rem;
    display: flex;
    align-items: center;
    line-height: 0.42rem;
    width: 100%;
    justify-content: space-between;
}
.lists .liright .moneys{
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 0.42rem;
    justify-content: space-between;
    color: #FC4D52;
}
.liright .moneys i{
    font-style: normal;
    font-size: 0.36rem;
}
.liright .moneys .ri{
    background: #FF5E5E;
    color: #fff;
    padding: 0 20px;
}
</style>

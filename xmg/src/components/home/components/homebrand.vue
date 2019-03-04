<template>
    <div id="homebrand">
        <div class="brandheader">
            <a href="##">
                <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01jvG2Rq2JJhuIXHipY-2053469401.jpg" alt="">
            </a>
            <div>
                <h3>因关爱而存在-九阳</h3>
                <p>更懂中国厨房</p>
            </div>
        </div>
        <div class="brandcontent">
            <div class="contentlist">
                <div>
                    <a href="##">
                        <img src="https://img.alicdn.com/imgextra/i2/3170143011/TB2PrOrzkSWBuNjSszdXXbeSpXa_!!3170143011.jpg_310x310.jpg" alt="">
                        <p>【九阳】全自动煎炒烙烤电饼铛</p>
                    </a>
                    <p>¥<i>119</i><del>¥159</del></p>
                </div>
                <div>
                    <a href="##">
                        <img src="https://img.alicdn.com/imgextra/i4/207244664/O1CN01Uj4XB51kK9j26aOgf_!!207244664.jpg_310x310.jpg" alt="">
                        <p>【九阳】全自动煎炒烙烤电饼铛</p>
                    </a>
                    <p>¥<i>119</i><del>¥159</del></p>
                </div>
                <div class="noborder">
                    <a href="##">
                        <img src="https://img.alicdn.com/imgextra/i2/3170143011/TB2PrOrzkSWBuNjSszdXXbeSpXa_!!3170143011.jpg_310x310.jpg" alt="">
                        <p>【九阳】全自动煎炒烙烤电饼铛</p>
                    </a>
                    <p>¥<i>119</i><del>¥159</del></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scope>
#homebrand{
    width: 100%;
    height: auto;
    background-image: url(https://img.alicdn.com/imgextra/i4/2053469401/O1CN01ktPjdZ2JJhuGj0FWa-2053469401.jpg);
    background-color: #fff;
    background-size: 100% auto;
    background-repeat:  no-repeat;
    border-bottom: 10px solid rgb(245, 245, 245);
}
#homebrand .brandheader{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 1.8rem;
    padding-left: 0.3rem;
}
#homebrand .brandheader div{
    height: 100%;
    padding-left: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
#homebrand .brandheader h3{
    line-height: 0.92rem;
}
#homebrand .brandheader p{
    line-height: 0,75rem;
}



#homebrand .brandcontent{
    background: #fff;
    width: 100%;
    border-radius:  24px 24px 0 0;
}
#homebrand .brandcontent .contentlist{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
#homebrand .brandcontent .contentlist div{
    width: 30%;
    border-radius: 16px 16px 0 0;
    border-right: 2px solid #eee;
    background: #fff;
    padding-right: 1%;
}
#homebrand .brandcontent .contentlist .noborder{
    border: none;
}
#homebrand .contentlist img{
    width: 100%;
    padding: 0.2rem;
}
#homebrand .contentlist a p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
}
#homebrand .contentlist p{
    color: #FC4D52;
}
#homebrand .contentlist del{
    color: #bbb;
}
#homebrand .contentlist i{
    font-style: normal;
    font-size: 0.33rem;
}
</style>
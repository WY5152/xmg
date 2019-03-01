<template>
  <div id="bscroll">
      <div class="bscroll"  v-for="(item,index) in scrolls" :key="index">
        <div class="cent">
          <h3>
            <span>{{item.title}}</span>
          </h3>
           </div>
         <div class="scrollss">
             
          <div class="wrapper tabWrapper">
            <div class="content">
              <div class="tabble">
                <div>
                  <ul class="ul-img">
                    <li v-for="(items,index1) in  item.img " :key="index1">
                      <img :src="items">
                    </li>
                  </ul>
                  <ul class="ul-sum">
                    <li v-for="(item1,index2) in  item.sum " :key="index2">
                      <p>{{item1}}</p>
                    </li>
                  </ul>
                  <ul class="ul-cum">
                    <li v-for="(item2,index3) in  item.cum " :key="index3">
                      <p>{{item2}}</p>
                    </li>
                  </ul>
                  <ul class="ul-price">
                    <li v-for="(item5,index6) in  item.price " :key="index6">
                      <p>
                        <span>{{item5}}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         </div>
         
        </div>
      </div>
  </div>
</template>

<script >
import BScroll from "better-scroll";
export default {
  name: "scrolls",
  data() {
    return {
      scrolls: []
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "http://localhost:3000/scrolls"
    })
      .then(data => {
        // console.log(data);
        this.scrolls = data.data;
      })
      .catch(err => {
        console.log("失败", err);
      });
  },
  mounted() {
    let scroll = new BScroll(".wrapper", {
      scrollX:true,
      //click: true
    });
  }
};
</script>


<style lang="" scoped>
.bscroll {
  height: 4rem;
  border-bottom: 1px solid #f5f5f5;
}
.scrollss{
  overflow-x:hidden;
}
.tabWrapper > .content > .tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.tabbar{
   overflow-x:hidden;
}
.tabWrapper > .content {
  width: max-content;
}
.cent > h3 {
  width: 6.66rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  color: red;
}
.tabble > div > ul {
  display: flex;
}

.ul-img > li > img {
  width: 1.74rem;
  height: 1.74rem;
  margin: 0 0.22rem;
}
.ul-cum > li > p {
  width: 1.74rem;
  font-size: 0.22rem;
  /* padding: .1rem 0 0; */
  margin-bottom: 0.1rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #666;
  margin: 0.22rem;
}
.ul-sum > li > p {
  width: 1.74rem;
  border-radius: 0 0 2px 2px;
  text-align: center;
  text-indent: 0.2rem;
  background: #fff3f3;
  border: 1px solid #ffbdbf;
  color: #fc4d52;
  font-size: 0.2rem;
  overflow: hidden;
  height: 0.26rem;
  line-height: 0.26rem;
  margin: 0 0.22rem;
}
.ul-price > li > p > span {
  color: #ff2b22;
  font-size: 0.28rem;
  overflow: hidden;
  margin: 0 0.22rem;
  width: 1.74rem;
  display: block;
}
</style>
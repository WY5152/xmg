<template>
  <div id="bannerbig">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
          <img src="https://img.alicdn.com/imgextra/i3/2508158775/O1CN01Teutjv2Egzyb23sM6_!!2508158775.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://img.alicdn.com/imgextra/i3/2508158775/O1CN01KZDEhN2Egzyi3gvDg_!!2508158775.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://img.alicdn.com/imgextra/i3/2508158775/O1CN0116slCM2EgzyhjwKcU_!!2508158775.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
    #bannerbig{
        background: pink;
        width: 100%;
        height:3.124rem;
    }
    #bannerbig img{
        width: 100%;
    }

</style>

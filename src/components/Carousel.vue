<template>
  <div>
    <div class="container-fluid" style="padding:0;position: relative;">
      <div id="myCarousel" class="carousel slide" data-interval="3000" data-pause="hover" data-ride="carousel">
        <div class="carousel-inner" v-if="carouselList.length > 0">
          <div class="item" :class="[index == 0 ? 'active' : '']" v-for="(item,index) in carouselList" :key="(item,index)">
            <div class="gif">
              <img :src="require('../assets/'+item)" alt="">
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li v-for="(item,index) in carouselList" :key="(item,index)" data-target="#myCarousel" :data-slide-to="index" :class="[ index == 0 ? 'active' : '']"></li>
        </ol>
        <a href="#myCarousel" class="carousel-control left" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a href="#myCarousel" class="carousel-control right" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
      <a class="focus_start"></a>
    </div>
  </div>
</template>
<script>
  export default{
    name: "carousel",
    data(){
      return {
        msg: "这是轮播",
        carouselList:[],
      }
    },
    methods:{
      loadDataCarousel:function () {
        this.$http.get("http://127.0.0.1/personal/technology/src/assets/data/index.php").then(function (result) {
//          console.log(result.body.carousel);
          this.carouselList = result.body.carousel;
        })
      }
    },
    mounted:function(){
      this.loadDataCarousel();
      $('.focus_start').click(function () {
        $('html,body').animate({
          'scrollTop': window.innerHeight+150
        }, 500)
      })
    }
  }
</script>
<style scoped lang="less">
  .gif{
    width:100%;
  }
  .gif>img{
    width:100%;
  }
  a.focus_start{
    cursor:pointer;
    position:absolute;
    top:50%;
    left:50%;
    font-size: 38px;
    margin-left:-20px;
  }
  a.focus_start:before{
    color:#fff;
    content:"﹀";
    font-size: 40px;
    position:relative;
    top:0px;
    opacity: 0;
    -o-animation:toone 0.7s linear infinite 0.5s;
    -webkit-animation:toone 0.7s linear infinite 0.5s;
    animation:toone 0.7s linear infinite 0.5s;
  }
  @-webkit-keyframes toone{
    0%{
      top:0px;
      opacity: 0;
    }
    100%{
      top:20px;
      opacity:1;
    }
  }
  @keyframes toone{
    0%{
      top:0px;
      opacity: 0;
    }
    100%{
      top:20px;
      opacity:1;
    }
  }
</style>

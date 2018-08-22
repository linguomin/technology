<template>
  <div class="phone">
    <div class="container">
      <div class="row floor1-header">
        <div class="col-xs-6 col-sm-4 col-md-2 text-left">
          <transition name="rotate">
            <h1 v-if="showPhone">移动设备</h1>
          </transition>
        </div>
        <div class="col-xs-1 text-left">
          <button class="btn" data-toggle="button">更多 ></button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 text-left floor1-detail">
          <transition name="bounce" enter-active-class="bounceInLeft">
            <p v-if="detailShow">移动App市场及移动商务的高速发展也促进了人们对智能手机的选用</p>
          </transition>
        </div>
      </div>
      <div class="row floor1" v-if="indexPhone.length > 0">
        <div class="col-md-8" style="padding: 0">
          <div class="row" style="margin: 0">
            <div class="col-xs-6 view" style="padding: 0">
              <transition name="bounce" enter-active-class="bounceInLeft">
                <img v-if="showPhonePic" :src="require('../assets/'+indexPhone[0].href)" alt="">
              </transition>
              <div class="mask">
                <h2>{{indexPhone[0].title}}</h2>
                <p>{{indexPhone[0].detail}}</p>
                <a href="#" class="info">查看更多</a>
              </div>
            </div>
            <div class="col-xs-6 view" style="padding: 0">
              <transition name="bounce" enter-active-class="bounceInLeft">
                <img v-if="showPhonePic" :src="require('../assets/'+indexPhone[1].href)" alt="">
              </transition>
              <div class="mask">
                <h2>{{indexPhone[1].title}}</h2>
                <p>{{indexPhone[1].detail}}</p>
                <a href="#" class="info">查看更多</a>
              </div>
            </div>
            <div class="col-xs-6 view" style="padding: 0">
              <transition name="bounce" enter-active-class="bounceInLeft">
                <img v-if="showPhonePic" :src="require('../assets/'+indexPhone[2].href)" alt="">
              </transition>
              <div class="mask">
                <h2>{{indexPhone[2].title}}</h2>
                <p>{{indexPhone[2].detail}}</p>
                <a href="#" class="info">查看更多</a>
              </div>
            </div>
            <div class="col-xs-6 view" style="padding: 0">
              <transition name="bounce" enter-active-class="bounceInLeft">
                <img v-if="showPhonePic" :src="require('../assets/'+indexPhone[3].href)" alt="">
              </transition>
              <div class="mask">
                <h2>{{indexPhone[3].title}}</h2>
                <p>{{indexPhone[3].detail}}</p>
                <a href="#" class="info">查看更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 hidden-sm hidden-xs hover">
          <transition name="bounce" enter-active-class="bounceInRight">
            <img v-if="showPhonePic" :src="require('../assets/'+indexPhone[4].href)" alt="">
          </transition>
        </div>
      </div>
      <div class="row">
        <div col-xs-12>
          <hr>
        </div>
      </div>
      <div id="marquee" class="row"  v-if="indexPhoneRecommend.length > 0">
        <div class="recommend" id="con1" :class="{anim:animate==true}">
          <div class="col-xs-3" v-for="(item,index) in indexPhoneRecommend" :key="(item,index)">
            <div class="thumbnail">
              <img style="height:275px;" :src="require('../assets/'+item.href)" alt="">
              <div class="caption">
                <a href="#">
                  <p>{{item.title}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: "floor1",
    data(){
      return {
        msg: "这是手机",
        indexPhone:[],
        indexPhoneRecommend:[],
        animate:false,
        showPhone:false,
        detailShow:false,
        showPhonePic:false,
      }
    },
    created:function(){
      setInterval(this.scroll,2000);
    },
    methods:{
      loadDataFloor1:function(){
        this.$http.get("http://127.0.0.1/personal/technology/src/assets/data/index.php").then(function(result){
          this.indexPhone = result.body.indexPhone;
          this.indexPhoneRecommend = result.body.indexPhoneRecommend;
          console.log(this.indexPhone);
          console.log(this.indexPhoneRecommend);
        });
      },
      PhoneAnimateLoad:function () {
        $(window).on("scroll",()=>{
          //获得滚动高度
          var $scrollTop = $(document).scrollTop();
          if($scrollTop>=window.innerHeight){
            this.showPhone = true;
            this.detailShow = true;
            this.showPhonePic = true;
          }
        });
      },
      scroll:function(){
        $("#con1").css("marginLeft",-290);
        this.animate=!this.animate;
        var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        setTimeout(function(){
          that.indexPhoneRecommend.push(that.indexPhoneRecommend[0]);
          that.indexPhoneRecommend.shift();
          $("#con1").css("marginLeft",0);
          that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },500)
      }
    },
    mounted:function () {
      this.loadDataFloor1();
      this.PhoneAnimateLoad();

    }
  }
</script>
<style scoped lang="less">
  .phone {
    .floor1-header {
      margin-top: 50px;
    }
    .floor1-detail {
      padding-left: 10px;
      margin: 10px 0;
    }
    .floor1-detail p{
      font-size: 16px;
    }
    hr {
      border: 2px solid #000;
      border-radius: 50%;
    }
    .container {
      overflow: hidden;
    }
    .recommend {
      height: 355px;
      width: 3000px;
    }
    .recommend > div {
      float: left;
      width: 9.7%;
    }
    .anim {
      transition: all 0.5s;
    }
    .floor img{
      width:100%;
    }
    .view{
      overflow: hidden;
    }
    .view .mask{
      width:100%;
      height:100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .view img {
      height:100%;
      transform: scaleY(1);
      transition: all 0.7s ease-in-out;
    }
    .view .mask{
      background-color: rgba(255, 231, 179, 0.3);
      transition: all 0.5s linear;
      filter: alpha(opacity=0);
      opacity: 0;
    }

    .view a.info {
      opacity: 0;
      transform: scale(0);
      transition: all 0.5s linear;
      display: inline-block;
      text-decoration: none;
      padding:0.5rem 1rem;
      background: #000;
      color: #fff;
      text-transform: uppercase;
      box-shadow: 0 0 1px #000;
      position:absolute;
      bottom:20px;
      left:50%;
      margin-left:-40px;
    }
    .view a.info:hover {
      box-shadow: 0 0 5px #000;
    }
    .view:hover img {
      transform: scale(10);
      opacity: 0;
    }
    .view:hover .mask {
      background-color: rgba(255, 231, 179,.8);
      opacity: 1;
      padding: 10px;
    }
    .view:hover h2,.view:hover p,.view:hover a.info {
      transform: scale(1);
      opacity: 1;
    }
    .view h2{
      margin: 30px 0;
    }
    .view p{
      font-size: 16px;
    }
    .hover{
      padding-left:0;
      overflow: hidden;
    }
    .hover img{
      transition: all .5s linear;
    }
    .hover img:hover{
      transform: scale(1.1);
    }
  }
</style>

<template>
  <div class="VR">
    <div class="container">
      <div class="row floor3-header">
        <div class="col-xs-2 col-sm-1 text-left">
          <transition name="rotate">
            <h1 v-if="showVR">VR</h1>
          </transition>
        </div>
        <div class="col-xs-1 text-left">
          <button class="btn " data-toggle="button">更多 ></button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 text-left floor3-detail">
          <transition name="bounce" enter-active-class="bounceInLeft">
            <p v-if="detailShow">VR是计算机仿真系统它利用计算机生成一种模拟环境是交互式的三维动态视景和实体行为的系统仿真使用户沉浸到该环境中。</p>
          </transition>
        </div>
      </div>
      <div class="row" v-if="indexVR.length > 0">
        <div class="col-sm-6 col-md-9 floor3">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexVR[0].title}}</a>
            </h5>
            <p class="text-left">{{indexVR[0].lookCount}}</p>
          </div>
          <transition name="bounce" enter-active-class="bounceInLeft">
            <img v-if="showVRPic" :src="require('../assets/'+indexVR[0].href)" alt="">
          </transition>
        </div>
        <div class="col-sm-6 col-md-3 floor3">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexVR[1].title}}</a>
            </h5>
            <p class="text-left">{{indexVR[1].lookCount}}</p>
          </div>
          <transition name="bounce" enter-active-class="bounceInRight">
            <img v-if="showVRPic" :src="require('../assets/'+indexVR[1].href)" alt="">
          </transition>
        </div>
        <div class="col-sm-6 col-md-3 floor3">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexVR[2].title}}</a>
            </h5>
            <p class="text-left">{{indexVR[2].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInLeft">
            <img v-if="showVRPic" :src="require('../assets/'+indexVR[2].href)" alt="">
          </transition>
        </div>
        <div class="col-sm-6 col-md-3 floor3">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexVR[3].title}}</a>
            </h5>
            <p class="text-left">{{indexVR[3].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInLeft">
            <img v-if="showVRPic" :src="require('../assets/'+indexVR[3].href)" alt="">
          </transition>
        </div>
        <div class="col-sm-6 col-md-3 floor3">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexVR[4].title}}</a>
            </h5>
            <p class="text-left">{{indexVR[4].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showVRPic" :src="require('../assets/'+indexVR[4].href)" alt="">
          </transition>
        </div>
        <div class="col-sm-6 col-md-3 floor3">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexVR[5].title}}</a>
            </h5>
            <p class="text-left">{{indexVR[5].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showVRPic" :src="require('../assets/'+indexVR[5].href)" alt="">
          </transition>
        </div>
      </div>
      <div class="row">
        <div col-xs-12>
          <hr>
        </div>
      </div>
      <div id="marquee" class="row"  v-if="indexVRRecommend.length > 0">
        <div class="recommend" id="con1" :class="{anim:animate==true}">
          <div class="col-xs-3" v-for="(item,index) in indexVRRecommend" :key="(item,index)">
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
    name: "floor3VR",
    data(){
      return {
        msg: "这是VR",
        indexVR:[],
        indexVRRecommend:[],
        animate:false,
        showVR:false,
        detailShow:false,
        showVRPic:false,
      }
    },
    created:function(){
      setInterval(this.scroll,2000);
    },
    methods:{
      loadDataFloor3:function(){
        this.$http.get("http://127.0.0.1/personal/technology/src/assets/data/index.php").then(function(result){
          this.indexVR = result.body.indexVR;
          this.indexVRRecommend = result.body.indexVRRecommend;
//          console.log(this.indexVR);
//          console.log(this.indexVRRecommend);
        });
      },
      VRAnimateLoad:function () {
        $(window).on("scroll",()=>{
          //获得滚动高度
          var $scrollTop = $(document).scrollTop();
          if($scrollTop>=window.innerHeight*3){
            this.showVR = true;
            this.detailShow = true;
            this.showVRPic = true;
          }
        });
      },
      scroll:function(){
        $("#con1").css("marginLeft",-290);
        this.animate=!this.animate;
        var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        setTimeout(function(){
          that.indexVRRecommend.push(that.indexVRRecommend[0]);
          that.indexVRRecommend.shift();
          $("#con1").css("marginLeft",0);
          that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },500)
      }
    },
    mounted:function () {
      this.loadDataFloor3();
      this.VRAnimateLoad();

    }
  }
</script>
<style scoped lang="less">
  .VR .floor3-header {
    margin-top: 50px;
  }

  .VR .floor3-detail {
    padding-left: 10px;
    margin: 10px 0;
  }

  .VR .floor3 {
    padding: 0px;
    overflow: hidden;
    position: relative;
    transition:all 0.5s ease-in-out;
  }

  .VR .floor3 img {
    width: 100%;
    height: 400px;
    -webkit-transition: all .5s linear;
    -moz-transition: all .5s linear;
    -ms-transition: all .5s linear;
    -o-transition: all .5s linear;
    transition: all .5s linear;
  }

  .VR .floor3 img:hover{
    transform: scale(1.1);
  }
  .VR .floor3 .syno_bom{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 35px;
    line-height: 35px;
    background: rgba(0, 0, 0, .8);
    color: #fff;
    font-weight: 400;
    transition:height 0.3s;
    z-index: 10;
  }
  .VR .floor3 .syno_bom h5{
    font-weight:normal;
    text-align:left;
    height:35px;
    font-size: 16px;
    padding-left:10px;
    line-height: 35px;
  }
  .VR .floor3 .syno_bom p{
    padding-left:60px;
    height:25px;
    line-height:25px;
    background:url('../assets/img/abc.png') no-repeat 9px -390px;
  }
  .VR .floor3:hover .syno_bom{
    height:65px;
  }
  .VR .floor3 a{
    color:#fff;
    text-decoration: none;
  }
  .VR hr{
    border:2px solid #000;
    border-radius: 50%;
  }
  .VR .container{
    overflow: hidden;
  }
  .VR .recommend{
    height: 355px;
    width: 3000px;
  }
  .VR .recommend>div{
    float: left;
    width:9.7%;
  }
  .anim{
    transition: all 0.5s;
  }
</style>

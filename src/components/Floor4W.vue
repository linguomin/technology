<template>
  <div class="w">
    <div style="margin-bottom: 50px" class="container" v-if="indexW.length > 0">
      <div class="row  floor4-header">
        <div class="col-xs-6 col-sm-2 text-left">
          <transition name="rotate">
            <h1 v-if="showW">无人机</h1>
          </transition>
        </div>
        <div class="col-xs-1 text-left">
          <button class="btn " data-toggle="button">更多 ></button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 text-left floor4-detail">
          <transition name="bounce" enter-active-class="bounceInLeft">
            <p v-if="showWDetail">国内外无人机相关技术飞速发展，无人机系统种类繁多、用途广特点鲜明，致使其在尺寸、质量、航程、航时、飞行高度、飞行速度，任务等多方面都有较大差异。</p>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="row">
            <div class="col-xs-6 floor4">
              <div class="syno_bom">
                <h5>
                  <a href="#">{{indexW[0].title}}</a>
                </h5>
                <p class="text-left">{{indexW[0].lookCount}}</p>
              </div>
              <transition name="zoom" enter-active-class="zoomInRight">
                <img v-if="showWPic" :src="require('../assets/'+indexW[0].href)" alt="">
              </transition>
            </div>
            <div class="col-xs-6 floor4">
              <div class="syno_bom">
                <h5>
                  <a href="#">{{indexW[1].title}}</a>
                </h5>
                <p class="text-left">{{indexW[1].lookCount}}</p>
              </div>
              <transition name="zoom" enter-active-class="zoomInRight">
                <img v-if="showWPic" :src="require('../assets/'+indexW[1].href)" alt="">
              </transition>
            </div>
            <div class="col-xs-6 floor4">
              <div class="syno_bom">
                <h5>
                  <a href="#">{{indexW[2].title}}</a>
                </h5>
                <p class="text-left">{{indexW[2].lookCount}}</p>
              </div>
              <transition name="zoom" enter-active-class="zoomInRight">
                <img v-if="showWPic" :src="require('../assets/'+indexW[2].href)" alt="">
              </transition>
            </div>
            <div class="col-xs-6 floor4">
              <div class="syno_bom">
                <h5>
                  <a href="#">{{indexW[3].title}}</a>
                </h5>
                <p class="text-left">{{indexW[3].lookCount}}</p>
              </div>
              <transition name="zoom" enter-active-class="zoomInRight">
                <img v-if="showWPic" :src="require('../assets/'+indexW[3].href)" alt="">
              </transition>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 floor4">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexW[4].title}}</a>
            </h5>
            <p class="text-left">{{indexW[4].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showWPic" :src="require('../assets/'+indexW[4].href)" alt="">
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6 floor4">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexW[5].title}}</a>
            </h5>
            <p class="text-left">{{indexW[5].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showWPic" :src="require('../assets/'+indexW[5].href)" alt="">
          </transition>
        </div>
        <div class="col-md-3 col-sm-6 floor4">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexW[6].title}}</a>
            </h5>
            <p class="text-left">{{indexW[6].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showWPic" :src="require('../assets/'+indexW[6].href)" alt="">
          </transition>
        </div>
        <div class="col-md-3 col-sm-6 floor4">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexW[7].title}}</a>
            </h5>
            <p class="text-left">{{indexW[7].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showWPic" :src="require('../assets/'+indexW[7].href)" alt="">
          </transition>
        </div>
        <div class="col-md-3 col-sm-6 floor4">
          <div class="syno_bom">
            <h5>
              <a href="#">{{indexW[8].title}}</a>
            </h5>
            <p class="text-left">{{indexW[8].lookCount}}</p>
          </div>
          <transition name="zoom" enter-active-class="zoomInRight">
            <img v-if="showWPic" :src="require('../assets/'+indexW[8].href)" alt="">
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"Floor4W",
    data(){
      return{
        msg:"这是无人机",
        showW:false,
        showWDetail:false,
        showWPic:false,
        indexW:[]
      }
    },
    methods:{
      loadDataFloor4:function () {
        this.$http.get("http://127.0.0.1/personal/technology/src/assets/data/index.php").then(function (result) {
//          console.log(result.body.indexW);
          this.indexW = result.body.indexW;
        });
      },
      WAnimateLoad:function () {
        $(window).on("scroll",()=>{
          //获得滚动高度
          var $scrollTop = $(document).scrollTop();
          if($scrollTop>=window.innerHeight*4){
            this.showW = true;
            this.showWDetail= true;
            this.showWPic = true;
          }
        });
      }
    },
    mounted:function () {
      this.WAnimateLoad();
      this.loadDataFloor4();
    }
  }
</script>
<style scoped lang="less">
  .w{
    .floor4-header {
      margin-top: 30px;
    }
    .floor4-detail {
      padding-left: 10px;
      margin: 10px 0;
    }
    .floor4{
      padding: 0px;
      overflow: hidden;
      position: relative;
      transition:all 0.5s ease-in-out;
    }
    .floor4 img{
      width: 100%;
      -webkit-transition: all .5s linear;
      -moz-transition: all .5s linear;
      -ms-transition: all .5s linear;
      -o-transition: all .5s linear;
      transition: all .5s linear;
    }
    .floor4 img:hover{
      transform: scale(1.1);
    }
    .floor4:hover .syno_bom{
      height:65px;
    }
    .syno_bom{
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
    .syno_bom h5{
      font-weight:normal;
      text-align:left;
      height:35px;
      font-size: 16px;
      padding-left:10px;
      line-height: 35px;
    }
    .syno_bom h5>a{
      color: #fff;
    }
    .syno_bom p{
      padding-left:60px;
      height:25px;
      line-height:25px;
      background:url('../assets/img/abc.png') no-repeat 9px -390px;
    }
  }
</style>

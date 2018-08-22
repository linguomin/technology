<template>
  <div class="floor2">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-sm-3 col-md-2 text-left">
          <transition name="bounce" enter-active-class="bounceInLeft">
            <h3 v-if="isShow">人工智能</h3>
          </transition>
        </div>
        <div class="col-xs-1 text-left">
          <button class="btn btn-sm" data-toggle="button">更多 ></button>
        </div>
      </div>
      <div class="row">
        <div class="text-left">
          <transition name="bounce" leave-active-class="bounceOutRight">
          <p v-if="isShow" class="sub_title" style="margin: 10px 0;">人工智能，英文缩写为AI。它是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。</p>
          </transition>
        </div>
      </div>
      <div class="row imgs" v-if="AI.length>0">
        <div class="col-md-4 hidden-sm hidden-xs pad first_img" style="overflow: hidden;">
          <div class="img_box" style="height: 700px;">
            <transition name="zoom" enter-active-class="zoomIn" >
              <img v-if="isShow"  :src="require('../assets/'+AI[0].href)" alt="">
            </transition>
            <div class="img_text" style="top: 80%;">
              <h5>{{AI[0].title}}</h5>
              <hr>
              <p>{{AI[0].detail}}</p>
              <a href="#" target="_blank" class="btn">查看更多</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12  col-sm-6 col-md-4 pad">
          <div class="img_box">
            <transition name="zoom" enter-active-class="zoomIn">
              <img v-if="isShow" :src="require('../assets/'+AI[1].href)" alt="">
            </transition>
            <div class="img_text">
              <h5>{{AI[1].title}}</h5>
              <hr>
              <p>{{AI[1].detail}}</p>
              <a href="#" target="_blank" class="btn">查看更多</a>
            </div>
          </div>
          <div class="img_box">
            <transition name="zoom" enter-active-class="zoomIn">
              <img v-if="isShow" :src="require('../assets/'+AI[2].href)" alt="">
            </transition>
            <div class="img_text">
              <h5>{{AI[2].title}}</h5>
              <hr>
              <p>{{AI[2].detail}}</p>
              <a href="#" target="_blank" class="btn">查看更多</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 pad">
          <div class="img_box">
            <transition name="zoom" enter-active-class="zoomIn">
              <img v-if="isShow" :src="require('../assets/'+AI[3].href)" alt="">
            </transition>
            <div class="img_text">
              <h5>{{AI[3].title}}</h5>
              <hr>
              <p>{{AI[3].detail}}</p>
              <a href="#" target="_blank" class="btn">查看更多</a>
            </div>
          </div>

          <div class="img_box" style="margin-bottom:30px;">
            <transition name="zoom" enter-active-class="zoomIn">
              <img v-if="isShow" :src="require('../assets/'+AI[4].href)"  alt="">
            </transition>
            <div class="img_text">
              <h5>{{AI[4].title}}</h5>
              <hr>
              <p>{{AI[4].detail}}</p>
              <a href="#" target="_blank" class="btn">查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "floor3",
    data() {
      return {
        msg: "这是VR",
        isShow: false,
        AI:[]
      }
    },
    methods: {
      showPic: function () {
        $(window).on("scroll",()=>{
          //获得滚动高度
          var $scrollTop = $(document).scrollTop();
          if($scrollTop>=window.innerHeight*2.2){
            this.isShow = true;
          }
        });

      },
      loadDataAI:function(){
        this.$http.get("http://127.0.0.1/personal/technology/src/assets/data/index.php").then(function(result){
//          console.log(result.body.indexAI);
          this.AI=result.body.indexAI;
        })
      }
    },
    mounted: function () {
      this.showPic();
      this.loadDataAI();
//    console.log(this.isShow);
    }

  }
</script>
<style scoped>

</style>

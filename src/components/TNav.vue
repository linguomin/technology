<template>

    <nav class="navbar navbar-default" style="margin-bottom: 0">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header" style="margin:0">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">AI科技</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!--<div class="move"></div>-->
          <ul class="nav navbar-nav">
            <li><a href="#">首页<span class="sr-only">(current)</span></a></li>
            <li><a href="#">电子产品</a></li>
            <li><a href="#">人工智能</a></li>
            <li><a href="#">VR</a></li>
            <li><a href="#">无人机</a></li>
            <li><a href="#">更多</a></li>
          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-info">搜索</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>

          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
  export default {
    name: 'TNav',
//    data () {
//      return {
//        msg: 'header'
//      }
//    }
  }
</script>


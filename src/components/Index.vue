<template>
  <div>
    <TNav></TNav>
    <Carousel></Carousel>
    <Star></Star>
    <Floor1></Floor1>
    <Floor2></Floor2>
    <Floor3VR></Floor3VR>
    <Floor4W></Floor4W>
    <TFooter></TFooter>
  </div>
</template>

<script>
  import TNav from "./TNav";
  import Carousel from "./Carousel";
  import Star from "./Star";
  import Floor1 from "./Floor1";
  import Floor2 from "./Floor2";
  import Floor3VR from "./Floor3VR";
  import Floor4W from "./Floor4W";
  import TFooter from "./TFooter";
  export default{
    name: 'index',
    components: {TNav,Carousel,Star,Floor1,Floor2,Floor3VR,Floor4W,TFooter},
    data(){
      return {
        msg: "这是主页"
      }
    },

  }
</script>


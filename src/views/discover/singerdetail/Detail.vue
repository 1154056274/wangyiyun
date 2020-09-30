<template>
  <div class="detail">
    <div id="img"><img :src="list.picUrl" alt=""></div>
    <div id="right" >
        <h2>{{list.trans}}</h2>
        <p>单曲数：{{list.musicSize}}</p>
        <p>专辑数：{{list.albumSize}}</p>
        <p>MV数：30</p>
    </div>
   <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
     
    >
      <router-link tag="el-menu-item"  to="/detail/top"
        >热门歌曲(TOP 50)</router-link
      >
      <router-link tag="el-menu-item"  to="/detail/zhuanji"
        >专辑</router-link
      >
      <router-link tag="el-menu-item"  to="/detail/mv"
        >MV</router-link
      >
      <router-link tag="el-menu-item"  to="/detail/geshou"
        >歌手详情</router-link
      >
    
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import{mapMutations} from 'vuex'
export default {
  data() {
    return {
        activeIndex:"",
        id:"",
        total:"",
        list:{}
    };
  },
  methods: {
      ...mapMutations(['setDetailId']),
    // 方法
    
      getzj(){
        this.$http.get("/artist/album?id="+this.id).then(res=>{
        this.list = res.data.artist
      })
      }
 
    
  },
  created() {
    // 实例被创建之后执行代码
    this.id = this.$route.query.id
    this.setDetailId(this.id)
    this.getzj()
  },
  mounted() {
    // 页面进入时加载内容
  },
  components: {
    // 组件的引用
  },
  props: {
    // 父辈向子辈传参
  },
  watch: {
    // 监测变化
  },
  computed: {
    // 计算属性
  },
};
</script>
<style lang='scss' scoped >
.detail {
    overflow-x: hidden;
  overflow-y: auto;
  width: 1000px;
height: 800px;
  margin-left: 200px;

  #img {
    width: 170px;
    height: 170px;
   
    margin-top: 30px;
    margin-left: 30px;
    float: left;
    img{
        width: 100%;
        height: 100%;
    }
  }
  #right{
      font-size: 14px;
      float: left;
      margin-left: 40px;
      h2{
          margin-top: 25px;
          line-height: 40px;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
      }
      p{
          line-height: 1.5;
      }
  }
    .active {
    color: #409eff !important;
    border-bottom: 2px solid #409eff !important;
  }
  .el-menu-demo {
      clear: both;
    width: 970px;
    padding-left: 20px;
    height: 60px;
    margin-left: 25px;
  }

}


</style>
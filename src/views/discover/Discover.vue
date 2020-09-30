<template>

  <div class="discover">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
     
    >
      <router-link tag="el-menu-item" class="li" to="/discover/recommend"
        >个性推荐</router-link
      >
      <router-link tag="el-menu-item" class="li" to="/discover/songlist"
        >歌单</router-link
      >
      <router-link tag="el-menu-item" class="li" to="/discover/toplist"
        >排行榜</router-link
      >
      <router-link tag="el-menu-item" class="li" to="/discover/singer"
        >歌手</router-link
      >
      <router-link tag="el-menu-item" class="li" to="/discover/newsong"
        >最新音乐</router-link
      >
    </el-menu>
    <router-view></router-view>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex:''
    };
  },
  methods: {
    // 方法
 
  },
  created() {
    // 实例被创建之后执行代码
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
.discover {
  width: 1000px;
  height: 800px;
  margin-left: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eceff1;
  }
  &::-webkit-scrollbar-track-piece { //滚动条凹槽的颜色，还可以设置边框属性
  background-color: #eceff1;
  }
  .active {
    color: #409eff !important;
    border-bottom: 2px solid #409eff !important;
  }
  .el-menu-demo {
    width: 700px;
    padding-left: 250px;
    height: 60px;
    margin-left: 25px;
  }
}
</style>
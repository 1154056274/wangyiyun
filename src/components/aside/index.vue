<template>
  <div class="aside">
   
    <el-col :span="4" class="tab">
      <el-menu
        class="el-menu-vertical-demo left"
      
        background-color="#eceff1"
        text-color="#37474f"
      >
        <el-submenu index="1">
          <template slot="title" >
            <span>推荐</span>
          </template>
          <el-menu-item-group >
            <router-link tag="el-menu-item"  index="1-1" to="/discover">发现音乐</router-link>
          </el-menu-item-group>
          <el-menu-item-group >
            <router-link tag="el-menu-item"  index="1-2" to="/video">视频</router-link>
          </el-menu-item-group>
          <el-menu-item-group >
            <router-link tag="el-menu-item"  index="1-3" to="/friends">朋友</router-link>
          </el-menu-item-group>
          <el-menu-item-group>
            <router-link tag="el-menu-item"  index="1-4" to="/perfm">私人FM</router-link>
          </el-menu-item-group>
        </el-submenu>
        
        <el-submenu index="2">
          <template slot="title">
            <span>我的音乐</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">每日推荐</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-2">我的音乐云盘</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-3">我的电台</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-4">我的收藏</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>创建的歌单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">选项1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <span>收藏的歌单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">选项1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <div id="right-line"></div>
     <div id="left-line"></div>
     <div id="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    };
  },
  methods: {
    
   
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
.active{
  color: #409eff !important
}
.aside{
  height: 800px;
width: 200px;
float: left;

  position: relative;
  .tab{
    width: 200px;
    height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
     &::-webkit-scrollbar {
      width: 0px;
      }
    &::-webkit-scrollbar-thumb {
    background-color: #eceff1;
  }
  }
  #right-line{
  width: 1px;
  height: 800px;
  background: #cecece;
  position: absolute;
  left: 200px;
}
#left-line{
  width: 1px;
  height: 800px;
  background: #cecece;
  position: absolute;

}



}


</style>
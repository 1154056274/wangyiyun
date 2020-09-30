<template>
  <div class="footer">
    <div id="line"></div>
    <audio :src="url" controls autoplay></audio>
    <button @click="action">播放</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sid: "",
      url: "",
    };
  },
  methods: {
    // 方法
    action() {
      console.log(this.id,111)
      this.$http.get("/song/url?id="+ this.sid).then((res) => {
        console.log(res, res.data.data[0].url);
        this.url = res.data.data[0].url;
      });
    },
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
    listenSid: function (newd) {
      this.sid = newd
 
    },
  },
  computed: {
    // 计算属性
    listenSid() {
      return this.$store.state.sid;
    },
  },
};
</script>
<style lang='scss' scoped >
.footer {
  position: absolute;
  top: 870px;
  #line {
    height: 1px;
    width: 1200px;
    background: #cecece;
  }
  audio {
    width: 1200px;
    height: 40px;
    outline: none;
  }
}
</style>
<template>
  <div class="songlist">
    <div id="top">
      <p>热门标签:</p>
      <ul>
        <li @click="hy">华语<span>|</span></li>
        <li @click="lx">流行<span>|</span></li>
        <li @click="yg">摇滚<span>|</span></li>
        <li @click="dz">电子<span>|</span></li>
        <li @click="ll">另类/独立<span>|</span></li>
        <li @click="qyy">轻音乐<span>|</span></li>
        <li @click="zy">综艺<span>|</span></li>
        <li @click="ys">影视原声<span>|</span></li>
        <li @click="acg">ACG<span>|</span></li>
      </ul>
    </div>
    <div class="main">
      <dl class="top" v-for="(item, index) in lists" :key="index">
        <dt>
          <img :src="item.img" />
        </dt>
        <dd>{{ item.p }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
        {
          img:
            "https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg",
          p: "最新华语音乐推荐",
        },
        {
          img:
            "https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg",
          p: "你的眼里没有我",
        },
        {
          img:
            "https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg",
          p: "嗨,抑郁了吗",
        },
        {
          img:
            "https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg",
          p: "还有多远才能走进你的心",
        },
        {
          img:
            "https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg",
          p: "温柔是世界里永恒的的光",
        },
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
        {
          img:
            "https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg",
          p: "最新华语音乐推荐",
        },
        {
          img:
            "https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg",
          p: "你的眼里没有我",
        },
        {
          img:
            "https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg",
          p: "嗨,抑郁了吗",
        },
        {
          img:
            "https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg",
          p: "还有多远才能走进你的心",
        },
        {
          img:
            "https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg",
          p: "温柔是世界里永恒的的光",
        },
      ],
    };
  },
  methods: {
    hy() {
      this.lists = [
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
      ];
    },
    lx() {
      this.lists = [
        {
          img:
            "https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg",
          p: "最新华语音乐推荐",
        },
        {
          img:
            "https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg",
          p: "你的眼里没有我",
        },
        {
          img:
            "https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg",
          p: "嗨,抑郁了吗",
        },
        {
          img:
            "https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg",
          p: "还有多远才能走进你的心",
        },
        {
          img:
            "https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg",
          p: "温柔是世界里永恒的的光",
        },
      ];
    },
    yg() {
      this.lists = [
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
      ];
    },
    dz() {
      this.lists = [
        {
          img:
            "https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg",
          p: "最新华语音乐推荐",
        },
        {
          img:
            "https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg",
          p: "你的眼里没有我",
        },
        {
          img:
            "https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg",
          p: "嗨,抑郁了吗",
        },
        {
          img:
            "https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg",
          p: "还有多远才能走进你的心",
        },
        {
          img:
            "https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg",
          p: "温柔是世界里永恒的的光",
        },
      ];
    },
    ll() {
      this.lists = [
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
      ];
    },
    qyy() {
      this.lists = [
        {
          img:
            "https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg",
          p: "最新华语音乐推荐",
        },
        {
          img:
            "https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg",
          p: "你的眼里没有我",
        },
        {
          img:
            "https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg",
          p: "嗨,抑郁了吗",
        },
        {
          img:
            "https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg",
          p: "还有多远才能走进你的心",
        },
        {
          img:
            "https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg",
          p: "温柔是世界里永恒的的光",
        },
      ];
    },
    zy() {
      this.lists = [
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
      ];
    },
    ys() {
      this.lists = [
        {
          img:
            "https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg",
          p: "最新华语音乐推荐",
        },
        {
          img:
            "https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg",
          p: "你的眼里没有我",
        },
        {
          img:
            "https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg",
          p: "嗨,抑郁了吗",
        },
        {
          img:
            "https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg",
          p: "还有多远才能走进你的心",
        },
        {
          img:
            "https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg",
          p: "温柔是世界里永恒的的光",
        },
      ];
    },
    acg() {
      this.lists = [
        {
          img:
            "http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg",
          p: "值得循环的Cover合集",
        },
        {
          img:
            "http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg",
          p: "古风歌曲合集",
        },
        {
          img:
            "http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg",
          p: "超好听歌曲",
        },
        {
          img:
            "http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg",
          p: "今朝有酒今朝醉",
        },
        {
          img:
            "http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg",
          p: "网易热歌分享",
        },
      ];
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
  },
  computed: {
    // 计算属性
  },
};
</script>
<style lang='scss' scoped >
#top {
  height: 50px;
  p {
    float: left;
    height: 50px;
    width: 80px;
    line-height: 50px;
    margin-left: 30px;
  }
  ul {
    float: left;
    li {
      cursor: pointer;
      float: left;
      height: 50px;
      line-height: 50px;
      padding: 0 8px;
      span {
        margin-left: 10px;
        margin-top: -10px;
      }
    }
  }
}

.main {
  width: 980px;
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;

  dl {
    cursor: pointer;
    width: 165px;
    height: 210px;
    margin-left: 30px;
    margin-top: 30px;
    transition: all 0.3s;
    &:hover {
      margin-top: 20px;
    }

    dt {
      width: 160px;
      height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      padding-left: 10px;
      width: 150px;
      height: 45px;
      font-size: 10px;
      font-weight: bold;
      line-height: 1.2;
      padding-top: 8px;
      border: 1px solid #eeeeee;
    }
  }
}
</style>
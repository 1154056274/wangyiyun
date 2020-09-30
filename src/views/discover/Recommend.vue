<template>
  <div class="recommend">
    <el-carousel :interval="4000" type="card" height="200px" class="lunbo">
      <el-carousel-item v-for="(item, index) in list" :key="index">
        <h3 class="medium"><img :src="item" alt="" /></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="songlist">
      <h3>推荐歌单</h3>
      <p id="more" @click='more'>更多 ></p>
    </div>
    <div class="main">
      <dl class="top"  v-for="(item,index) in lists" :key="index">
        <dt>
          <img
            :src="item.img"
          />
        </dt>
        <dd>{{item.p}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      list: [
        "http://p1.music.126.net/sj9uPQuLMn_l4hbLOYXjiQ==/109951165349133261.jpg",
        "http://p1.music.126.net/mAFFIsgmAjY3vBZYPsjFiA==/109951165349146283.jpg",
        "http://p1.music.126.net/rghYhjIGICxS6zxTWepNTQ==/109951165349012723.jpg",
        "http://p1.music.126.net/NNmXgakDY_9rZoSxDp6BSA==/109951165349122147.jpg",
        "http://p1.music.126.net/rmpsqJ7JGFmwd-p74WH7dg==/109951165349442557.jpg",
        "http://p1.music.126.net/mAFFIsgmAjY3vBZYPsjFiA==/109951165349146283.jpg",
      ],
      lists:[{img:'https://p1.music.126.net/kIc6Hzrr1bKq1tGVyFewUQ==/109951165350579575.jpg',p:'最新华语音乐推荐'},
              {img:'https://p1.music.126.net/83qAY9x_nwAaB8ye0cl5-Q==/109951165340316542.jpg',p:'你的眼里没有我'},
              {img:'https://p1.music.126.net/8p53EQxIpTxAjJxuMKltIA==/109951165142721774.jpg',p:'嗨,抑郁了吗'},
              {img:'https://p2.music.126.net/aZK1tGIaEf2wyiNivKzb4w==/109951165276678244.jpg',p:'还有多远才能走进你的心'},
              {img:'https://p1.music.126.net/x0MJE54X8JPZDTESjaYQ8g==/109951164762209488.jpg',p:'温柔是世界里永恒的的光'},
              {img:'http://p3.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg',p:'值得循环的Cover合集'},
              {img:'http://p4.music.126.net/o6n2JudJ7bho-uX4Sq7gIQ==/109951164301689510.jpg',p:'古风歌曲合集'},
              {img:'http://p3.music.126.net/xCcuj0NBwqSU9kWni1dwGw==/109951165033264010.jpg',p:"超好听歌曲"},
              {img:'http://p3.music.126.net/I49alGp-K2vlGvUEPyO3xA==/109951164510327201.jpg',p:'今朝有酒今朝醉'},
              {img:'http://p3.music.126.net/Y7FJCoAHJzI2e-umdKOndQ==/109951165239873661.jpg',p:'网易热歌分享'}
      ] 
    };
  },
  methods: {
    // 方法
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    more(){
      this.$router.push({
      path: '/discover/songlist/huayu'
      })
    }
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
.recommend{
.lunbo {
  width: 960px;
  margin-top: 15px;
  margin-left: 20px;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
img {
  width: 100%;
  height: 100%;
}

.songlist {
  width: 960px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #cecece;
  margin-left: 20px;
  h3 {
    float: left;
    margin-top: 5px;
  }
  p {
    float: right;
    font-size: 12px;
    color: #9e9e9e;
    margin-top: 5px;
    cursor: pointer;
  }
}
.main {
  width: 980px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  min-height: 400px;

  dl {
    cursor: pointer;
    width: 165px;
    height: 210px;
    margin-left: 20px;
    margin-right: 10px;
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
}
</style>
<template>
  <div class="singer">
    <div class="language">
      <p>语种:</p>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="item"
          @click="change(index)"
          :class="{ on: flag === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="kind">
      <p>分类:</p>
      <ul>
        <li
          v-for="(item, index) in lists"
          :key="item"
          @click="change1(index)"
          :class="{ on: flag1 === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="sx">
      <p>筛选:</p>
      <ul>
        <li
          v-for="(item, index) in listss"
          :key="item"
          @click="change2(index, item)"
          :class="{ on: flag2 === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>

       <div class="main">
      <dl class="top" v-for="(item, index) in singgerList" :key="index" @click="godetail(item.id)">
        <dt>
          <img :src="item.img1v1Url" />
        </dt>
        <dd>{{ item.name }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singgerList:[],
      flag: 0,
      list: ["全部", "华语", "欧美", "韩国", "日本", "其他"],

      flag1: 0,
      lists: ["全部", "男歌手", "女歌手", "乐队"],

      flag2: 0,
      listss: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "#",
      ],
      area: -1,
      type: -1,
      initial: "a",
    };
  },
  methods: {
    // 方法
    godetail(id){
      this.$router.push({
        path:'/detail',
        query:{
          id
        }
      })
    },
    change(index) {
      this.flag = index;
      switch (index) {
        case 0:
          this.area = -1;
          break;
        case 1:
          this.area = 7;
          break;
        case 2:
          this.area = 96;
          break;
        case 3:
          this.area = 8;
          break;
        case 4:
          this.area = 16;
          break;
        case 5:
          this.area = 0;
          break;
      }
      this.$http
        .get(
          `/artist/list?type=${this.type}&area=${this.area}&initial=${this.initial}`
        )
        .then((res) => {
          console.log(res);
        this.singgerList = res.data.artists
        });
    },
    change1(index) {
      this.flag1 = index;
      switch (index) {
        case 0:
          this.type = -1;
          break;
        case 1:
          this.type = 1;
          break;
        case 2:
          this.type = 2;
          break;
        case 3:
          this.type = 3;
          break;
      }
      this.$http
        .get(
          `/artist/list?type=${this.type}&area=${this.area}&initial=${this.initial}`
        )
        .then((res) => {   this.singgerList = res.data.artists});
    },
    change2(index, item) {
      this.flag2 = index;
      this.initial = item;

      this.$http
        .get(
          `/artist/list?type=${this.type}&area=${this.area}&initial=${this.initial}`
        )
        .then((res) => {
          this.singgerList = res.data.artists
        });
    },
    getList(){
        this.$http
        .get(
          `/artist/list?type=${this.type}&area=${this.area}&initial=${this.initial}`
        )
        .then((res) => {
          console.log(res);
        this.singgerList = res.data.artists
        });
    }
  },
  created() {
    // 实例被创建之后执行代码
   
   this.getList()
   
 
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
.language {
  height: 50px;
  p {
    float: left;
    height: 50px;
    width: 40px;
    line-height: 50px;
    margin-left: 30px;
  }
  ul {
    float: left;
    li {
      &.on {
        color: red;
      }

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

.kind {
  height: 40px;
  p {
    float: left;
    height: 40px;
    width: 40px;
    line-height: 40px;
    margin-left: 30px;
  }
  ul {
    float: left;
    li {
      &.on {
        color: red;
      }
      cursor: pointer;
      float: left;
      height: 40px;
      line-height: 40px;
      padding: 0 8px;
    }
  }
}
.sx {
  margin-top: 15px;
  P {
    float: left;
    margin-left: 30px;
  }
  ul {
    margin-top: 3px;
    float: left;
    margin-left: 5px;
    li {
      &.on {
        color: red;
      }
      cursor: pointer;
      float: left;
      padding: 0 8px;
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
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd {
   
      width: 150px;
      height: 30px;
      font-size: 10px;
      font-weight: bold;
      padding-top: 8px;
      border: 1px solid #eeeeee;
      text-align: center;
    }
  }
}

 
</style>
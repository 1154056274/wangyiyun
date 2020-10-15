<template>
  <div id="header">
    <span class="logo"></span>
    <span class="tb" @click="left">&lt;</span>
    <span class="tb" @click="right">&gt;</span>
    <div id="search">
      <van-search
        class="input"
        v-model="value"
        shape="round"
        background="#eceff1"
        placeholder="搜索音乐、视频、歌手"
        @focus.prevent="show"
        @input="input"
        @blur.prevent="none"
      />
      <div id="hot" v-if="showHot">
        <p>热搜榜</p>
        <ul>
          <li
            v-for="(item, index) in hotlist"
            :key="index"
            @click="go(item.searchWord)"
          >
            <div class="left">{{ index + 1 }}</div>
            <div class="right">
              <span>{{ item.searchWord }}</span>
              <span>{{ item.score }}</span>
              <div class="bot">{{ item.content }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="suggest" v-if="sug">
        <ul>
          <li
            v-for="(item, index) in sugList"
            :key="index"
            @click="goSug(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>

    <!-- <el-button  class="login" @click="open">
     <img class="avatar" src="~@/assets/img/default_avatar.png" alt="" />
      <span class="user-name">未登录</span>
  </el-button> -->
    <el-button type="text" @click="alert" class="login">
      <img class="avatar" :src="login.img" alt="" />
      <span class="user-name">{{ login.p }}</span>
    </el-button>

    <el-dialog
      title="请输入手机号和密码"
      :visible.sync="dialogFormVisible"
      v-if="flag"
    >
      <el-form :model="form">
        <el-form-item label="手机号">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Logo",
  data() {
    return {
      login: {
        img: "",
        p: "未登录",
      },
      flag: true,
      showHot: false,
      value: "",
      hotlist: [],
      sug: false,
      sugList: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        username: "",
        password: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    alert() {
      if (this.login.img) {
        this.dialogFormVisible = false;
      } else {
        this.dialogFormVisible = true;
      }
    },
    ...mapMutations(["setToken"]),
    getMessage() {
      this.login.img = JSON.parse(localStorage.getItem("img"));
      this.login.p = JSON.parse(localStorage.getItem("name"));
    },
    submit() {
      // if(this.login.img){
      //   this.flag=false
      // }

      this.dialogFormVisible = false;
      this.$http
        .get(
          `/login/cellphone?phone=${this.form.username}&password=${this.form.password}`
        )
        .then((res) => {
          this.setToken(res.data.token);
          // this.=res.data.profile.avatarUrl
          // this.login.p = res.data.profile.nickname
          localStorage.setItem(
            "name",
            JSON.stringify(res.data.profile.nickname)
          );
          localStorage.setItem(
            "img",
            JSON.stringify(res.data.profile.avatarUrl)
          );
        });
    },

    left() {
      this.$router.back();
    },
    right() {
      history.go(1);
    },
    show() {
      //获取焦点
      this.showHot = true;
    },
    none() {
      //失去焦点
      this.showHot = false;
    },
    getHotList() {
      //热榜列表
      this.$http.get("/search/hot/detail").then((res) => {
        console.log(res);
        this.hotlist = res.data.data;
      });
    },
    goSug(key) {
      //搜索建议查询
      this.sug = false;
      this.$http.get("/search?keywords=" + key).then((res) => {
        console.log(res);
      });
    },
    go(key) {
      //热榜查询信息
      this.showHot = false;
      this.$http.get("/search?keywords=" + key).then((res) => {
        console.log(res);
      });
    },
    input() {
      //输入的时候
      this.sug = true;
      this.showHot = false;
      this.$http.get("/search/suggest?keywords=" + this.value).then((res) => {
        console.log(res);
        this.sugList = res.data.result.songs;
      });
    },
  },
  created() {
    this.getHotList();
    this.getMessage();
  },
};
</script>
<style lang='scss'  scoped >
#header {
  position: relative;
  width: 1200px;
  height: 50px;
  background: #eceff1;
  display: flex;
  .logo {
    display: inline-block;
    height: 30px;
    width: 120px;
    background-image: url("~@assets/img/logo.svg");
    background-size: 100% 100%;
    margin-top: 10px;
    margin-left: 15px;
  }
  .tb {
    font-size: 20px;
    margin-left: 20px;
    margin-top: 15px;
    cursor: pointer;
  }
  .input {
    margin-left: 20px;
    padding-top: 13px !important;
    height: 50px;
  }
  #search {
    position: relative;
    #hot {
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #cecece;
      }

      overflow: auto;
      position: absolute;
      z-index: 10;
      width: 300px;
      height: 400px;
      background: white;
      border: 1px solid black;
      left: 30px;
      top: 45px;
      border-radius: 5px 5px 5px 5px;
      padding: 0 20px;
      p {
        font-size: 14px;
        color: #cecece;
        height: 50px;
        line-height: 50px;
      }
      ul {
        li {
          height: 50px;
          cursor: pointer;

          &:hover {
            background: #eceff1;
          }
          > div {
            float: left;
          }
          .left {
            line-height: 50px;
            margin-left: 10px;
            margin-right: 20px;
          }
          .right {
            font-size: 12px;
            margin-top: 8px;
            span:nth-child(1) {
              font-weight: bolder;
            }
            span:nth-child(2) {
              margin-left: 20px;
            }
          }
        }
      }
    }
    .suggest {
      width: 250px;
      height: 300px;
      background: white;
      position: absolute;
      z-index: 10;
      border: 1px solid #cecece;
      left: 32px;
      border-radius: 10px 10px 10px 10px;
      ul {
        cursor: pointer;
        li {
          line-height: 1.5;
          margin-left: 20px;
          margin-top: 10px;
          &:hover {
            color: paleturquoise;
          }
        }
      }
    }
  }
  .login {
    height: 30px;
    position: absolute;
    right: 10px;

    background: #eceff1;
    outline: none;
    border: none;
    .avatar,
    .user-name {
      cursor: pointer;
    }

    .avatar {
      width: 25px;
      height: 25px;
      vertical-align: middle;
      border-radius: 50%;
    }
    .user-name {
      margin-left: 10px;
      font-size: 11px;
    }
  }
}
</style>

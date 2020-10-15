<template>
  <div class="top">
    <el-table
      class="table"
      ref="singleTable"
      :data="tableData"
      @row-dblclick="dblclick"
      style="width: 98%"
    >
      <el-table-column label="序号" type="index" width="50"> </el-table-column>
      <el-table-column property="name" label="音乐标题" width="120">
      </el-table-column>
      <el-table-column property="ar[0].name" label="歌手" width="120">
      </el-table-column>
      <el-table-column property="al.name" label="专辑"> </el-table-column>
      <el-table-column property="date" label="时长" width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
      activeIndex: "",
      tableData: [],
    };
  },
  methods: {
    // 方法
    ...mapActions(["start"]),
    getId() {
      this.id = this.$store.state.id;
    },
    getList() {
      this.$http.get("/artist/top/song?id=" + this.id).then((res) => {
        this.tableData = res.data.songs;
      });
    },
    dblclick(row) {
      this.start(row.id);
    },
  },
  created() {
    // 实例被创建之后执行代码
    this.getId(), this.getList();
  },
  mounted() {
    // 页面进入时加载内容
  },
  components: {
    // 组件的引用
  },
  // 父辈向子辈传参
  watch: {
    // 监测变化
  },
  computed: {
    // 计算属性
  },
};
</script>
<style lang='scss' scoped >
.top {
  .table {
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
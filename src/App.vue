<template>
  <el-container>
    <el-aside :width="sildeWidth">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        router
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item>
          <i @click="collapseStatus" class="el-icon-menu"></i>
        </el-menu-item>
        <el-submenu index="operator">
          <template v-slot:title>
            <i class="el-icon-news"></i>
            <span>导航一</span>
          </template>

          <el-menu-item index="/operator/virtual"> virtual </el-menu-item>

          <el-menu-item index="/operator/huobi"> huobi </el-menu-item>
        </el-submenu>
        <el-menu-item index="2" disabled>
          <i class="el-icon-document"></i>
          <span>导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span>导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main v-loading="loading" element-loading-text="加载中...">
        <!-- <router-view :key="$route.path" /> -->
        <div id="vue"></div>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    activeMenu() {
      return this.$route.path.split("/").slice(0, 3).join("/");
    },
    loading() {
      return this.$store.state.loading;
    },
    sildeWidth() {
      return this.isCollapse ? "auto" : "300px";
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(this);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    collapseStatus() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
#rootApp {
  font-family: Helvetica, sans-serif;
  height: 100%;
}
html,
body,
.el-container {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  /* text-align: center; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
}

body > .el-container {
  /* height: 100%; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /* line-height: 260px; */
}

.el-container:nth-child(7) .el-aside {
  /* line-height: 320px; */
}
a {
  text-decoration: none;
  color: #303133;
}
.router-link-active {
  color: #9cf;
}
</style>

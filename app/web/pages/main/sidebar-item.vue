<template>
  <div>
    <template v-for="item in menusList">
      <!-- <router-link v-if="item.menu_items.length == 0" :to="item.path"> -->
        <el-menu-item v-if="item.children.length == 0" :index="item.page_url">
          <router-link :to="item.page_url">
            <span slot="title">
              {{item.name}}
            </span>
          </router-link>
        </el-menu-item>
      <!-- </router-link> -->
      <el-submenu :index="item.name" v-if="item.children.length > 0">
        <template slot="title">
          <i :class="changeClass(item.icon)" :title="item.name"></i><span slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children">
          <sidebar-item v-if="child.children && child.children.length > 0" :menusList='child.children'></sidebar-item>
            <!-- <router-link v-else class="menu-indent" :to="child.path"> -->
          <el-menu-item v-else :index="child.page_url">
            <span slot="title">
              <router-link class="menu-link" :to="child.page_url">
                <span style="font-size: 12px;">&#8226;</span> {{child.name}}
              </router-link>
            </span>
          </el-menu-item>
            <!-- </router-link> -->
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: "sidebarItem",
  props: {
    menusList: {
      type: Array
    }
  },
  methods: {
    changeClass(data) {
      if(data){
        data = data.indexOf('iconfont') !== -1 ? data : 'glyphicon '+ data;
      }
      return data;
    }
  }
};
</script>

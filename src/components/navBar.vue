<template>
  <div class="nav-bar">
    <div class="mask"></div>
    <div class="logo">
      <div class="logo-img-box">
        <img src="@/assets/image/logo.png" class="logo-img" alt="logo">
      </div>
      <div class="logo-title">PYCD-FE</div>
    </div>
    <div class="nav-menu">
      <div 
        v-for="(item, index) in navMenu" 
        :key="index"
        class="nav"
        :class="{ active: index === activeIndex }"
        @click="goToPath(item.path)"
      >{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

/* 导航菜单数据 */
const navMenu = [
  {
    title: '工具整合',
    path: '/navigation'
  },
  {
    title: 'PYCD-js',
    path: '/js'
  },
  {
    title: 'PYCD-cli',
    path: '/cli'
  },
  {
    title: '破羽残蝶',
    path: '/profile'
  }
]

/* 跳转到点击页面 */
const goToPath = (path: string) => {
  router.push({ path })
}

// 获取当前高亮
const activeIndex = computed(() => navMenu.findIndex(nav => nav.path === route.path))
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: var(--PYCD-nav-bar-height);
  position: fixed;
  top: 0;
  .mask {
    width: 100%;
    height: 100%;
    background-color: var(--PYCD-bg-half-opacity);
    // background-color: rgba(255, 255, 255, .1);
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    backdrop-filter: blur(12px);
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--page-padding);
    .logo-img-box {
      width: 32px;
      height: 32px;
    }
    .logo-img {
      width: 100%;
      height: 100%;
    }
    .logo-title {
      font-size: 24px;
      font-weight: 700;
      margin-left: 8px;
      // background: linear-gradient(-60deg, var(--PYCD-bg-gradient-start) 0, var(--PYCD-bg-gradient-end) 100%);
      background: linear-gradient(-60deg,#8700ff 0,#ff009e 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .nav-menu {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--page-padding);
    .nav {
      margin-left: 16px;
      &:hover {
        color: var(--PYCD-brand);
        cursor: pointer;
      }
    }
    .active {
      color: var(--PYCD-brand);
    }
  }
}
</style>
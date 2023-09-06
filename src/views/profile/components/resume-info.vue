<template>
  <div class="resume-warbler">
    <div class="header">
      <div class="avatar"></div>
      <div class="job">前端工程师</div>
    </div>
    <div class="info">
      <div class="info-item">姓名：陈伟贤</div>
      <div class="info-item">昵称：破羽残蝶</div>
      <div class="info-item">年龄：23</div>
      <div class="info-item">坐标：深圳</div>
      <div class="info-item">邮箱：1248353039@qq.com</div>
      <div class="info-item">微信：cwx353039</div>
      <div class="info-item">学校：江西理工大学</div>
      <div class="info-item">专业：软件工程</div>
    </div>
    <div class="contact">
      <div class="words">
        破羽残蝶是一个前端开发工程师，性格开朗，涉猎广泛，平时会看足球、读小说、听音乐，玩游戏，学习日语。
        <strong>目前正在在做webgis相关工作</strong>，如果你对我或我的技术感兴趣 ， 欢迎联系我
      </div>
    </div>
    <div class="icons">
      <i class="iconfont icon icon-juejin" @click="goToLink('juejin')"></i>
      <i class="iconfont icon icon-huaban88" @click="goToLink('github')"></i>
      <i class="iconfont icon icon-weixin" @click="goToLink('wechat')"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLink = (type: string) => {
  if (type === 'juejin') window.open('https://juejin.cn/user/4099422807393901');
  if (type === 'github') window.open('https://github.com/artoria-tsubaki');
  if (type === 'wechat') router.push({ path: '/contact' });
};
</script>

<style lang="scss" scoped>
.resume-warbler {
  width: 100%;

  strong {
    color: var(--PYCD-brand);
    margin: 0 5px;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: url('@/assets/image/avatar.jpg') no-repeat;
      background-size: cover;
    }
    .job {
      font-size: 24px;
      margin: 16px 0;
      font-weight: bold;
    }
  }

  .info {
    margin: 8px 0 16px 0;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    padding-bottom: 16px;
    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 900px) {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 220px);
    }

    .info-item {
      margin-top: 8px;
    }
  }

  .contact {
    .words {
      line-height: 1.4;
      letter-spacing: 1px;
    }
  }
  .icons {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    .icon {
      cursor: pointer;
      font-size: 24px;
      margin: 8px;
      &:hover {
        color: var(--PYCD-brand);
      }
    }
  }
}
</style>

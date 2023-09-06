<template>
  <div class="left-part">
    <resumeInfo />
  </div>
</template>

<script setup lang="ts">
import resumeInfo from '../components/resume-info.vue';
</script>

<style lang="scss" scoped>
.left-part {
  @media (max-width: 900px) {
    display: none;
  }
  width: 250px;
  height: 100%;
  background-color: var(--PYCD-bg-soft);
  border-radius: 10px;
  display: flex;
  padding: 16px;
  overflow: auto;
  position: relative;
  &::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }
}
</style>
<template>
  <div class="PYCD-page">
    <div class="layout">
      <leftPart />
      <middlePart />
      <rightPart />
    </div>
  </div>
</template>

<script setup lang="ts">
import leftPart from './part/left-part.vue'
import middlePart from './part/middle-part.vue'
import rightPart from './part/right-part.vue'
</script>

<style lang="scss" scoped>
.PYCD-page {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: var(--PYCD-nav-bar-height);
  .layout {
    width: 100%;
    height: 100%;
    padding: 32px;
    display: flex;
    @media (max-width: 900px) {
      padding: 16px;
    }
  }
}
</style>
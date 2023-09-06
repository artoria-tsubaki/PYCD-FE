<template>
  <div class="right-part">
    <resumeSkills />
    <resumeLink />
  </div>
</template>

<script setup lang="ts">
import resumeSkills from '../components/resume-skills.vue';
import resumeLink from '../components/resume-link.vue';
</script>

<style lang="scss" scoped>
.right-part {
  flex: 1;
  margin-left: 16px;
  height: 100%;
  background-color: var(--PYCD-bg-soft);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1500px) {
    display: none;
  }
}
</style>
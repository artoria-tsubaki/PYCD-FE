<template>
  <div class="middle-part">
    <resume-info class="resume-info-component" />
    <resume-skills class="resume-skills-component" />
    <resume-job />
    <resume-link class="resume-link-component" />
  </div>
</template>

<script setup lang="ts">
import resumeInfo from '../components/resume-info.vue';
import resumeSkills from '../components/resume-skills.vue'; 
import resumeJob from '../components/resume-job.vue';
import resumeLink from '../components/resume-link.vue';
</script>

<style lang="scss" scoped>
.resume-skills-component,
.resume-link-component {
  @media (min-width: 1500px) {
    display: none;
  }
}
.resume-info-component {
  @media (min-width: 900px) {
    display: none;
  }
}

.middle-part {
  height: 100%;
  @media (max-width: 1500px) {
    flex: 1;
  }
  @media (max-width: 900px) {
    margin-left: 0px;
  }
  margin-left: 16px;
  background-color: var(--PYCD-bg-soft);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }
}
</style>
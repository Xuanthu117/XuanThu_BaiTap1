<template>
  <div class="list-header">
    <div class="header-text" v-for="item in headeTitles" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Headers",
  props: {
    headeTitles: Array,
  },
};
</script>

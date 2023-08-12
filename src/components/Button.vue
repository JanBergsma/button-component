<script lang="ts" setup>
export interface Props {
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Default'
})
</script>

<template>
  <button>{{ name }}</button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.04);
  color: #3f3f3f;
}
button:hover,
button:focus {
  background: #aeaeae;
}
</style>

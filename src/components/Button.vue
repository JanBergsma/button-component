<script lang="ts" setup>
export interface Props {
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Default',
})
</script>

<template>
  <button>{{ name }}</button>
</template>

<style scoped></style>
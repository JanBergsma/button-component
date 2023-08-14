<script lang="ts" setup>
import { StartIcon } from '@/stories/Button.stories'

export interface Props {
  name: string
  outline: boolean
  text: boolean
  disableShadow: boolean
  disabled: boolean
  startIcon?: string
  endIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Default',
  outline: false,
  text: false,
  disableShadow: false,
  disabled: false
})
const hasIcon = props.startIcon || props.endIcon
const isOutline = props.outline
const isText = props.text
const shadowIsDisabled = props.disableShadow
const isDisabled = props.disabled
const isDefault = !(isOutline || isText || shadowIsDisabled || isDisabled || hasIcon)
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="ẗrue" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap"
    rel="stylesheet"
  />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
  <button
    :class="{
      default: isDefault,
      outline: isOutline,
      text: isText,
      disableShadow: shadowIsDisabled,
      disabled: isDisabled,
      hasIcon: hasIcon
    }"
    :disabled="isDisabled"
  >
    <div class="button-text-container">
      <span class="material-icons-outlined">{{ startIcon }}</span>
      {{ name }}
      <span class="material-icons-outlined">{{ endIcon }}</span>
    </div>
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.04);
}

.material-icons-outlined {
  font-size: small;
}
.button-text-container {
  display: grid;
  grid-auto-flow: column;
  gap: 0.4rem;
  align-items: center;
  align-content: center;
}
.default {
  background: #e0e0e0;
  color: #3f3f3f;
}
.default:hover,
.default:focus {
  background: #aeaeae;
}
.outline {
  outline: 1px solid;
  background: white;
  color: #3d5afe;
}
.outline:hover,
.outline:focus,
.text:hover,
.text:focus {
  background: rgba(41, 98, 255, 0.1);
}
.text {
  background: #ffffff;
  color: #3d5afe;
}
.disableShadow {
  background: #3d5afe;
  color: #ffffff;
  box-shadow: none;
}
.disableShadow:hover,
.disableShadow:focus {
  background: #5f5afe;
}

.disabled,
.text:hover,
.text:focus {
  color: #9e9e9e;
}

.disabled {
  color: #9e9e9e;
}

.disabled.text:hover,
.disabled.text:focus {
  background: #ffffff;
}

.hasIcon {
  background: #3d5afe;
  color: #ffffff;
}
.hasIcon:hover,
.hasIcon:focus {
  background: #5f5afe;
}
</style>

<script lang="ts" setup>
export interface Props {
  name?: string
  color?: string
  outline: boolean
  size?: string
  startIcon?: string
  endIcon?: string
  text: boolean
  disableShadow: boolean
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  outline: false,
  text: false,
  disableShadow: false,
  disabled: false
})
let propsColor = props.color
if ((props.disableShadow || props.endIcon || props.startIcon || props.size) && !props.color) {
  propsColor = 'primary'
}

let topAdBottomPadding = '0.6rem'
let leftAndRightPadding = '1rem'

if (props.size === 'sm') {
  topAdBottomPadding = '0.2rem'
  leftAndRightPadding = '0.4rem'
} else if (props.size === 'lg') {
  topAdBottomPadding = '1.0rem'
  leftAndRightPadding = '1.2rem'
}

let backgroundColor = '#e0e0e0'
let color = '#3f3f3f'
let shadowColor = '#33333333'
let hoverFocusColor = '#3f3f3f'
let hoverFocusBackgroundColor = '#aeaeae'

if (propsColor === 'primary') {
  backgroundColor = '#2962ff'
  color = '#ffffff'
  shadowColor = '#2962ff33'
  hoverFocusColor = '#ffffff'
  hoverFocusBackgroundColor = '#0039cb'
} else if (propsColor === 'secondary') {
  backgroundColor = '#455a64'
  color = '#ffffff'
  shadowColor = '#455a6433'
  hoverFocusColor = '#ffffff'
  hoverFocusBackgroundColor = '#1c313a'
} else if (propsColor === 'danger') {
  backgroundColor = '#d32f2f'
  color = '#ffffff'
  shadowColor = '#d32f2f33'
  hoverFocusColor = '#ffffff'
  hoverFocusBackgroundColor = '#9a0007'
}

let outlineStyle = 'none'

if (props.outline || props.text) {
  backgroundColor = '#ffffff'
  color = '#3d5afe'
  shadowColor = ''
  hoverFocusColor = '#3d5afe'
  hoverFocusBackgroundColor = '#2962ff10'
  outlineStyle = props.text ? 'none' : '1px solid #3d5afe'
}

if (props.disabled) {
  color = '#9e9e9e'
  shadowColor = ''
  hoverFocusColor = color
  hoverFocusBackgroundColor = backgroundColor
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="ẗrue" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap"
    rel="stylesheet"
  />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
  <button :disabled="disabled">
    <div class="button-text-container">
      <span class="material-icons-outlined">{{ startIcon }}</span>
      {{ name }}
      <span class="material-icons-outlined">{{ endIcon }}</span>
    </div>
  </button>
</template>

<style scoped>
button {
  font-family: 'Noto Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;

  background: v-bind(backgroundColor);
  color: v-bind(color);

  border: none;
  border-radius: 6px;

  outline: v-bind(outlineStyle);

  box-shadow: 0px 2px 3px 0px v-bind(shadowColor);

  padding: v-bind(topAdBottomPadding) v-bind(leftAndRightPadding);
}

button:hover,
button:focus {
  color: v-bind(hoverFocusColor);
  background: v-bind(hoverFocusBackgroundColor);
}

.button-text-container {
  display: grid;
  grid-auto-flow: column;
  gap: 0.4rem;
  justify-items: center;
  align-items: center;
}

.material-icons-outlined {
  font-size: small;
}
</style>

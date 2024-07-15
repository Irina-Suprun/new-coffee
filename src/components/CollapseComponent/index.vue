<template>
  <div>
    <slot name="activator" :is-collapsed="isCollapsed" :toggle="toggle">
    </slot>
    <div>
      <slot name="content" v-if="!isCollapsed"></slot>
    </div>
  </div>
</template>

<script>
import { String } from 'core-js';

export default {
  name: 'CollapseComponent',
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isCollapsed: this.collapse,
    };
  },
  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('collapseEvent', this.collapse);
    },
  },
};
</script>

<style>
.collapse-content {
  padding: 15px;
  color: rgb(49, 31, 8);
  font-size: 18px;
  font-family: '';
}
</style>

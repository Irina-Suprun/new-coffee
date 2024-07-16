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
    collapsed: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isCollapsed: this.collapsed,
    };
  },
  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('collapseEvent', this.collapse);
    },
  },
  watch: {
    collapsed(value) {
      this.isCollapsed = value;
    },
  },
};
</script>

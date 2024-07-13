<template>
    <div class="collapse-component">
        <button @click="toogle" class="collapse-activator button">
            <slot name="activator"></slot>
        </button>
        <div v-if="isCollapsed" class="collapse-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CollapseComponent',
  props: {
    Collapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCollapsed: this.Collapse,
    };
  },
  methods: {
    toogle() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('collapseEvent', this.isCollapsed);
    },
  },
};
</script>

<style>
.collapse-activator {
    color: brown;
    font-size: 16px;
    font-weight: 600;
}

.collapse-content {
    padding: 15px;
    color: rgb(49, 31, 8);
    font-size: 18px;
    font-family: '';
}
</style>
